import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { 
        name, 
        lname, 
        email, 
        company, 
        phone, 
        country, 
        project, 
        description 
    } = req.body;

    // Create transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    // Email content - BUDGET COMPLETELY REMOVED
    const mailOptions = {
        from: `"Abdellah Baqba - Portfolio" <${process.env.EMAIL_USER}>`,
        to: 'abdobag777@gmail.com',
        replyTo: email,
        subject: `📬 Nouveau message de ${name} ${lname} - ${project.length || 0} service(s)`,
        html: `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: linear-gradient(135deg, #0066cc 0%, #004999 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
                    .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px; }
                    .section { margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #ddd; }
                    .label { font-weight: bold; color: #555; min-width: 120px; display: inline-block; }
                    .value { color: #000; }
                    .service-tag { background: #0066cc; color: white; padding: 5px 10px; border-radius: 5px; display: inline-block; margin: 2px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1 style="margin:0;">📬 Nouveau message de contact</h1>
                        <p style="margin:5px 0 0; opacity:0.9;">De: ${name} ${lname}</p>
                    </div>
                    <div class="content">
                        
                        <div class="section">
                            <h2 style="color:#0066cc; margin-top:0;">👤 Informations personnelles</h2>
                            <p><span class="label">Nom complet:</span> <span class="value">${name} ${lname}</span></p>
                            <p><span class="label">Email:</span> <span class="value"><a href="mailto:${email}" style="color: #0066cc;">${email}</a></span></p>
                            <p><span class="label">Téléphone:</span> <span class="value">${phone || 'Non fourni'}</span></p>
                            <p><span class="label">Entreprise:</span> <span class="value">${company || 'Non fournie'}</span></p>
                            <p><span class="label">Pays:</span> <span class="value">${country || 'Non spécifié'}</span></p>
                        </div>

                        <div class="section">
                            <h2 style="color:#0066cc;">🛠️ Services demandés</h2>
                            <div style="margin-bottom:10px;">
                                ${project && project.length > 0 
                                    ? project.map(p => `<span class="service-tag">${p}</span>`).join(' ') 
                                    : '<span style="color:#999;">Aucun service sélectionné</span>'}
                            </div>
                            <p><span class="label">Nombre de services:</span> <span class="value">${project.length || 0}</span></p>
                        </div>

                        <div class="section">
                            <h2 style="color:#0066cc;">📝 Description du projet</h2>
                            <p style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #0066cc;">
                                ${description || 'Aucune description fournie'}
                            </p>
                        </div>

                        <div style="text-align: center; margin-top: 30px; color: #999; font-size: 12px;">
                            <p>Message envoyé depuis le portfolio de Abdellah Baqba</p>
                            <p>Développeur Web & Web Scraping</p>
                            <p>📅 ${new Date().toLocaleString('fr-FR', { 
                                timeZone: 'Africa/Casablanca',
                                dateStyle: 'full',
                                timeStyle: 'short'
                            })} (Heure du Maroc)</p>
                        </div>
                    </div>
                </div>
            </body>
            </html>
        `,
        text: `
═══════════════════════════════════════════
📬 NOUVEAU MESSAGE DE CONTACT
═══════════════════════════════════════════

👤 INFORMATIONS PERSONNELLES
──────────────────────────
Nom complet: ${name} ${lname}
Email: ${email}
Téléphone: ${phone || 'Non fourni'}
Entreprise: ${company || 'Non fournie'}
Pays: ${country || 'Non spécifié'}

🛠️ SERVICES DEMANDÉS
──────────────────────────
${project && project.length > 0 
    ? project.map(p => `• ${p}`).join('\n') 
    : 'Aucun service sélectionné'}
Total: ${project.length || 0} service(s)

📝 DESCRIPTION DU PROJET
──────────────────────────
${description || 'Aucune description fournie'}

═══════════════════════════════════════════
Message envoyé depuis le portfolio de Abdellah Baqba
Développeur Web & Web Scraping
📅 ${new Date().toLocaleString('fr-FR', { timeZone: 'Africa/Casablanca' })}
═══════════════════════════════════════════
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        
        // Also save to your database
        try {
            await fetch(`${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/contacts`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(req.body)
            });
        } catch (dbError) {
            console.log('⚠️ Database save error:', dbError.message);
        }

        res.status(200).json({ 
            success: true, 
            message: 'Email envoyé avec succès' 
        });
    } catch (error) {
        console.error('❌ Error sending email:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Erreur lors de l\'envoi de l\'email',
            error: error.message 
        });
    }
}
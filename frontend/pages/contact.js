import Head from "next/head";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { GrLinkedin } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

export default function contact() {

    const [name, setName] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [project, setProject] = useState([]);
    const [description, setDescription] = useState('');

    const [messageok, setMessageok] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function createProduct(ev) {
        ev.preventDefault();
        setIsLoading(true);
        setMessageok('📤 Envoi en cours...');

        const data = { name, lname, email, company, phone, country, project, description };

        try {
            // Send email via Nodemailer
            await axios.post('/api/send-email', data);
            
            // Also save to database
            await axios.post('/api/contacts', data);
            
            setMessageok('✅ Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.');
            
            // Reset all form fields after successful submission
            setName('');
            setLname('');
            setEmail('');
            setCompany('');
            setPhone('');
            setCountry('');
            setProject([]);
            setDescription('');
        } catch (error) {
            console.error('Error:', error);
            setMessageok('❌ Échec de l\'envoi du message. Veuillez réessayer ou me contacter directement par email.');
        } finally {
            setIsLoading(false);
        }
    }

    const handleProjectChange = (projectName) => {
        if (project.includes(projectName)) {
            setProject(project.filter(project => project !== projectName));
        } else {
            setProject([...project, projectName]);
        }
    };

    return <>
        <Head>
            <title>Abdellah Baqba - Contact</title>
            <meta name="description" content="Contactez Abdellah Baqba - Développeur Web & Web Scraping" />
        </Head>
        <div className="contactpage">
            <div className="container">
                <div className="contactformp">
                    <div className="leftcontp">
                        <h2>Parlons de votre projet</h2>
                        <h2 style={{ color: '#0066cc', marginTop: '0.5rem' }}>Transformons vos idées en solutions digitales</h2>
                        <p>Passionné par la digitalisation, je vois l'informatique non seulement comme un outil, mais comme une force capable de transformer nos façons de penser, de travailler et de vivre.</p>
                        <p>Vous avez un projet de développement web, d'automatisation ou de web scraping ? Discutons de vos besoins.</p>
                        <p>Je suis toujours heureux d'échanger sur de nouvelles idées et opportunités !</p>
                        
                        <div className="leftsociinfo">
                            <ul>
                                <li><FaPhoneVolume /> <span>Téléphone: <a href="tel:+212 676367706" rel="nofollow" target="_blank">0676367706</a></span></li>
                                <li><MdAttachEmail /> <span>Email: <a href="mailto:abdobaq777@gmail.com" rel="nofollow" target="_blank">abdobaq777@gmail.com</a></span></li>
                                <li><GrLinkedin /> <span>LinkedIn: <a href="https://www.linkedin.com/in/abdellah-baqba-tech/" rel="nofollow" target="_blank">Abdellah Baqba</a></span></li>
                                <li><FaGithub /> <span>GitHub: <a href="https://github.com/" rel="nofollow" target="_blank">@abdellahbaqba</a></span></li>
                            </ul>
                        </div>

                        <div style={{ 
                            marginTop: '2rem', 
                            padding: '1.5rem', 
                            backgroundColor: '#f0f7ff', 
                            borderRadius: '10px',
                            borderLeft: '4px solid #0066cc'
                        }}>
                            <h3 style={{ marginBottom: '0.5rem', color: '#000' }}>Mes services</h3>
                            <p style={{ color: '#333', marginBottom: '0.3rem' }}>• Développement web (Next.js, WordPress)</p>
                            <p style={{ color: '#333', marginBottom: '0.3rem' }}>• Web scraping & automatisation Python</p>
                            <p style={{ color: '#333', marginBottom: '0.3rem' }}>• Intégration CRM & génération de leads</p>
                            <p style={{ color: '#333' }}>• Bases de données & SQL</p>
                        </div>

                        <div style={{ marginTop: '1.5rem' }}>
                            <p style={{ color: '#555' }}><strong>Langues :</strong> English (Courant) • Français (Assez bien) • Arabe (Natif)</p>
                            <p style={{ color: '#555', marginTop: '0.5rem' }}><strong>Localisation :</strong> AL AMAL 2 NR 1404, KENITRA, Maroc</p>
                        </div>
                    </div>
                    
                    <div className="rightcontp">
                        <form onSubmit={createProduct}>
                            <div className="rightconttitle">
                                <h2>Vos informations</h2>
                            </div>
                            <div className="rightcontinputs">
                                <input 
                                    type="text" 
                                    value={name} 
                                    onChange={ev => setName(ev.target.value)} 
                                    placeholder="Prénom" 
                                    required 
                                />
                                <input 
                                    type="text" 
                                    value={lname} 
                                    onChange={ev => setLname(ev.target.value)} 
                                    placeholder="Nom" 
                                />
                                <input 
                                    type="email" 
                                    value={email} 
                                    onChange={ev => setEmail(ev.target.value)} 
                                    placeholder="Adresse email" 
                                    required 
                                />
                                <input 
                                    type="text" 
                                    value={company} 
                                    onChange={ev => setCompany(ev.target.value)} 
                                    placeholder="Nom de l'entreprise" 
                                />
                                <input 
                                    type="text" 
                                    value={phone} 
                                    onChange={ev => setPhone(ev.target.value)} 
                                    placeholder="Numéro de téléphone" 
                                    required 
                                />
                                <select 
                                    id="country" 
                                    value={country} 
                                    onChange={(e) => setCountry(e.target.value)} 
                                    name="country"
                                >
                                    <option value="">Sélectionnez un pays</option>
                                    <option value="Maroc">Maroc</option>
                                    <option value="France">France</option>
                                    <option value="Belgique">Belgique</option>
                                    <option value="Suisse">Suisse</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Tunisie">Tunisie</option>
                                    <option value="Algérie">Algérie</option>
                                    <option value="Autre">Autre</option>
                                </select>
                            </div>
                            
                            <div className="rightconttitle">
                                <h2>Quels services vous intéressent ?</h2>
                            </div>
                            <div className="rightcontcheckbox">
                                {[
                                    'Développement Web (Next.js)',
                                    'Web Scraping & Automatisation',
                                    'Site WordPress / CMS',
                                    'Intégration CRM',
                                    'Génération de leads',
                                    'Base de données & SQL',
                                    'Consulting & Stratégie'
                                ].map((projectOption) => (
                                    <label key={projectOption} className="cyberpunk-checkbox-label">
                                        <input
                                            type="checkbox"
                                            className="cyberpunk-checkbox"
                                            value={projectOption}
                                            checked={project.includes(projectOption)}
                                            onChange={() => handleProjectChange(projectOption)}
                                        />
                                        {projectOption}
                                    </label>
                                ))}
                            </div>
                            
                            {/* BUDGET SECTION - COMPLETELY REMOVED */}
                            
                            <div className="rightconttitle">
                                <h2>Décrivez votre projet</h2>
                            </div>
                            <div className="rightcontpera">
                                <textarea 
                                    value={description} 
                                    onChange={ev => setDescription(ev.target.value)} 
                                    name="description" 
                                    rows="4" 
                                    placeholder="Description du projet, objectifs, délais..."
                                    required
                                ></textarea>
                            </div>
                            
                            <hr />
                            
                            <div className="righhcontsbtn flex gap-3">
                                <button 
                                    type="submit" 
                                    disabled={isLoading} 
                                    style={{ 
                                        opacity: isLoading ? 0.7 : 1,
                                        cursor: isLoading ? 'not-allowed' : 'pointer'
                                    }}
                                >
                                    {isLoading ? 'Envoi...' : 'Envoyer'}
                                </button>
                                <p style={{ 
                                    color: messageok.includes('✅') ? '#28a745' : 
                                           messageok.includes('❌') ? '#dc3545' : 
                                           messageok.includes('📤') ? '#0066cc' : '#333',
                                    fontWeight: messageok ? '500' : 'normal'
                                }}>
                                    {messageok}
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}
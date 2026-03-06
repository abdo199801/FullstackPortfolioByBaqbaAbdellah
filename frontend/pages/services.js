import Head from "next/head";
import Link from "next/link";
import { IoMdCheckmark } from "react-icons/io";
import { HiXMark } from "react-icons/hi2";

export default function services() {
    return <>
        <Head>
            <title>Abdellah Baqba - Services</title>
            <meta name="description" content="Développement Web, Web Scraping, Automation, CRM & CMS - Abdellah Baqba" />
        </Head>

        <div className="servicespage">
            <div className="topservices">
                <div className="container">
                    <h2 data-aos="fade-up">Mes Services</h2>
                    <p data-aos="fade-up">Accueil <span>&gt;</span> Services</p>
                </div>
            </div>
            
            <div className="centerservices">
                <div className="container">
                    <div className="cservicesbox">
                        {/* Service 01 - Web Development */}
                        <div className="csservice" data-aos="fade-right">
                            <span>01</span>
                            <div>
                                <h2>Web Development</h2>
                                {/* Image removed */}
                            </div>
                            <ul>
                                <li>Landing pages avec Next.js</li>
                                <li>Sites vitrines modernes et responsives</li>
                                <li>Sites web pour marketing & consulting</li>
                                <li>Performance optimisée et SEO</li>
                                <li>Maintenance et mises à jour</li>
                            </ul>
                             </div>
                        
                        {/* Service 02 - Web Scraping & Automation */}
                        <div className="csservice" data-aos="fade-right">
                            <span>02</span>
                            <div>
                                <h2>Web Scraping & Automation</h2>
                                {/* Image removed */}
                            </div>
                            <ul>
                                <li>Extraction automatisée de données publiques</li>
                                <li>Scripts Python (BeautifulSoup, Scrapy, Selenium)</li>
                                <li>Collecte d'informations professionnelles</li>
                                <li>Automatisation de la mise à jour des données</li>
                                <li>Génération de leads B2B</li>
                            </ul>
                        </div>
                        
                        {/* Service 03 - CRM & Data Integration */}
                        <div className="csservice" data-aos="fade-up">
                            <span>03</span>
                            <div>
                                <h2>CRM & Data Integration</h2>
                                {/* Image removed */}
                            </div>
                            <ul>
                                <li>Intégration de données dans CRM</li>
                                <li>Export Excel pour équipes commerciales</li>
                                <li>Collecte de leads (nom, prénom, email, entreprise)</li>
                                <li>Prospection ciblée et automatisée</li>
                                <li>Garantie d'exactitude et fraîcheur des données</li>
                            </ul>
                            
                        </div>
                        
                        {/* Service 04 - CMS Development */}
                        <div className="csservice" data-aos="fade-up">
                            <span>04</span>
                            <div>
                                <h2>CMS Development</h2>
                                {/* Image removed */}
                            </div>
                            <ul>
                                <li>Création de sites WordPress</li>
                                <li>Personnalisation de thèmes</li>
                                <li>Sites pour sociétés de programmation</li>
                                <li>Maintenance et optimisation</li>
                            </ul>
                        </div>
                        
                        {/* Service 05 - Database & SQL */}
                        <div className="csservice" data-aos="fade-left">
                            <span>05</span>
                            <div>
                                <h2>Database Development</h2>
                                {/* Image removed */}
                            </div>
                            <ul>
                                <li>Conception de bases de données</li>
                                <li>Développement avancé</li>
                                <li>Optimisation de performances</li>
                            </ul>
                            
                        </div>
                        
                        {/* Service 06 - Lead Generation */}
                        <div className="csservice" data-aos="fade-left">
                            <span>06</span>
                            <div>
                                <h2>Lead Generation</h2>
                                {/* Image removed */}
                            </div>
                            <ul>
                                <li>Prospection B2B ciblée</li>
                                <li>Collecte d'emails professionnels</li>
                                <li>Extraction d'annuaires professionnels</li>
                                <li>Automatisation commerciale</li>
                                <li>Mise à jour régulière des informations</li>
                            </ul>
                        </div>
                        <div className="csservice" data-aos="fade-left">
                                    <span>07</span>
                                    <div>
                                        <h2>Subscriptions</h2>
                                        {/* Image removed */}
                                    </div>
                                    <ul>
                                        <li>ChatGPT Plus / Pro</li>
                                        <li>Microsoft 365 (Office)</li>
                                        <li>Adobe Creative Cloud</li>
                                        <li>Netflix / Spotify Premium</li>
                                    </ul>
                                </div>
                    </div>
                </div>
            </div>
            
            {/* Pricing Section - Updated for Freelance Services */}
            <div className="pricingplansec">
                <div className="container">
                    <div className="pricingtitles text-center">
                        <h3>TARIFS</h3>
                        <h2>Mes Forfaits</h2>
                        <p style={{ color: '#666', marginTop: '1rem' }}>Solutions adaptées à vos besoins en développement web et automatisation</p>
                    </div>

                    <div className="pricingcards">
                        {/* Basic Plan - Web Scraping */}
                        <div className="pricingcard">
                            <h4>Web Scraping</h4>
                            <p>Scripts d'extraction de données</p>
                            <h2>À partir de <span>5€</span></h2>
                            <Link href='/contact'><button>Demander un devis</button></Link>
                            <div>
                                <h5>Inclus :</h5>
                                <ul>
                                    <li><IoMdCheckmark /> Script Python personnalisé</li>
                                    <li><IoMdCheckmark /> Export Excel / CSV</li>
                                    <li><IoMdCheckmark /> 1 source de données</li>
                                    <li><HiXMark /> Mise à jour automatique</li>
                                    <li><HiXMark /> Intégration CRM</li>
                                </ul>
                            </div>
                        </div>
                        
                        {/* Premium Plan - Web Development */}
                        <div className="pricingcard" data-aos="fade-up">
                            <h4>Site Vitrine</h4>
                            <p>Next.js / WordPress</p>
                            <h2>À partir de <span>1€</span></h2>
                            <Link href='/contact'><button>Demander un devis</button></Link>
                            <div>
                                <h5>Inclus :</h5>
                                <ul>
                                    <li><IoMdCheckmark /> Landing page / Site vitrine</li>
                                    <li><IoMdCheckmark /> Design responsive</li>
                                    <li><IoMdCheckmark /> Next.js ou WordPress</li>
                                    <li><IoMdCheckmark /> SEO de base</li>
                                    <li><HiXMark /> Maintenance mensuelle</li>
                                </ul>
                            </div>
                        </div>
                        
                        {/* Pro Plan - Complete Solution */}
                        <div className="pricingcard" >
                            <h4>Solution Complète</h4>
                            <p>Développement + Automatisation</p>
                            <h2>Sur mesure <span>---</span></h2>
                            <Link href='/contact'><button>Nous contacter</button></Link>
                            <div>
                                <h5>Services combinés :</h5>
                                <ul>
                                    <li><IoMdCheckmark /> Site web + Web scraping</li>
                                    <li><IoMdCheckmark /> Intégration CRM complète</li>
                                    <li><IoMdCheckmark /> Automatisation des données</li>
                                    <li><IoMdCheckmark /> Maintenance mensuelle</li>
                                    <li><IoMdCheckmark /> Support prioritaire</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </> 
}
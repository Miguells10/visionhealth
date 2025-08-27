import React from 'react';

// Função para rolar suavemente até o id desejado


const VisionHealth = () => {
  
  const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
  return (
    <div className="visionhealth">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo-section">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/358bc8a68168545d5416ad5678390204f0d466a0?width=111" 
              alt="VisionHealth Logo" 
              className="logo-image"
            />
            <span className="logo-text">VisionHealth</span>
          </div>
            <nav className="navigation">
              {/** biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <a
                href="#about"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
              >
                Quem Somos
              </a>
              <a 
              href="#process" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('process');
              }}
              >Diferenciais</a>

              <a 
              href="#contato" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contato');
              }}
              >Contato</a>
            </nav>
          <a href="https://prototipovision.vercel.app" className="cta-button-header" target='blank' rel="noopener noreferrer">Experimente Agora</a>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-container">
            <div className="hero-content">
              <h1 className="hero-title">Você merece enxergar melhor.</h1>
              <p className="hero-description">
                Por menos do que o custo de uma consulta tradicional, oferecemos triagem ocular digital com IA, validação profissional e orientação personalizada.
              </p>
              <a href="https://prototipovision.vercel.app" className="hero-cta-button" target='blank' rel="noopener noreferrer">Experimente Grátis Agora</a>
            </div>
            <div className="hero-image">
              <div className="hero-circle">
                <img 
                  src="/src/assets/olho_hero.png" 
                  alt="VisionHealth Hero"
                  className="hero-circle-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <div className="about-container">
            <div className="section-header">
              <span className="section-label">QUEM SOMOS</span>
            </div>
            <h2 className="about-title">
              A VisionHealth é a primeira solução digital de triagem ocular que combina inteligência artificial, acompanhamento médico e educação preventiva. Descubra se ele é ideal para você.
            </h2>
            <div className="about-buttons">
              <a href="https://prototipovision.vercel.app" className="primary-button" target='blank' rel="noopener noreferrer">Agende uma demonstração gratuita</a>
              <a href="process" 
              className="secondary-button"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('process');
              }}
              >Saiba como funciona</a>
            </div>
          </div>
        </section>

        {/* Patient Testimonial Section */}
        <section className="testimonial-section">
          <div className="testimonial-container">
            <div className="testimonial-content">
              <h2 className="testimonial-title">A sua saúde, redesenhada para você.</h2>
              <p className="testimonial-description">
                Imagine conquistar uma saúde plena e duradoura, com a tranquilidade de saber que você está economizando significativamente. É isso que nossa plataforma oferece: um futuro com mais bem-estar e menos despesas com tratamentos e especialistas.
              </p>
              <a href="https://prototipovision.vercel.app"className="testimonial-button" target='blank' rel="noopener noreferrer">Agendar uma demonstração gratuita.</a>
            </div>
            <div className="testimonial-image">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/09de0c9128a645831a4bb8f61a1141b3102cc930?width=922" 
                alt="Doctor with patient"
                className="testimonial-photo"
              />
            </div>
            <div className="testimonial-card">
              <div className="quote-mark">"</div>
              <blockquote className="testimonial-quote">
                Eu sempre me preocupei com a saúde dos meus olhos, mas a correria do dia a dia acabava me afastando de um cuidado mais constante. O VisionHealth mudou completamente esse cenário. Ele me deu a segurança e a ferramenta para cuidar da minha visão de forma simples e proativa, usando apenas o meu celular. Agora, eu não só acompanho minha saúde ocular sem complicação, como também tenho a tranquilidade de saber que estou monitorando qualquer pequena mudança de perto. É a paz de espírito na palma da minha mão.
              </blockquote>
              <div className="testimonial-author">
                <div className="author-name">Maria</div>
                <div className="author-location">ARACAJU/SE</div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id='process' className="process-section">
          <div className="process-container">
            {/* Feature Cards */}
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_118_656)">
                    <path d="M40.7241 16.983C38.0098 12.5625 31.8358 5.146 20.9998 5.146C10.1638 5.146 3.98981 12.5625 1.27556 16.983C0.436489 18.3401 -0.00796509 19.9042 -0.00796509 21.4997C-0.00796509 23.0953 0.436489 24.6594 1.27556 26.0165C3.98981 30.437 10.1638 37.8535 20.9998 37.8535C31.8358 37.8535 38.0098 30.437 40.7241 26.0165C41.5631 24.6594 42.0076 23.0953 42.0076 21.4997C42.0076 19.9042 41.5631 18.3401 40.7241 16.983V16.983ZM37.7403 24.1842C35.4093 27.9747 30.1331 34.3535 20.9998 34.3535C11.8666 34.3535 6.59032 27.9747 4.25932 24.1842C3.7608 23.3776 3.49675 22.448 3.49675 21.4997C3.49675 20.5515 3.7608 19.6219 4.25932 18.8152C6.59032 15.0247 11.8666 8.646 20.9998 8.646C30.1331 8.646 35.4093 15.0177 37.7403 18.8152C38.2388 19.6219 38.5029 20.5515 38.5029 21.4997C38.5029 22.448 38.2388 23.3776 37.7403 24.1842V24.1842Z" fill="#23406F"/>
                    <path d="M20.9997 12.7498C19.2691 12.7498 17.5773 13.2629 16.1384 14.2244C14.6995 15.1859 13.578 16.5524 12.9157 18.1513C12.2534 19.7501 12.0802 21.5095 12.4178 23.2068C12.7554 24.9041 13.5888 26.4632 14.8125 27.6869C16.0362 28.9107 17.5953 29.744 19.2926 30.0816C20.9899 30.4192 22.7493 30.246 24.3481 29.5837C25.947 28.9214 27.3136 27.7999 28.275 26.361C29.2365 24.9221 29.7497 23.2303 29.7497 21.4998C29.7469 19.18 28.8241 16.956 27.1838 15.3156C25.5434 13.6753 23.3194 12.7525 20.9997 12.7498V12.7498ZM20.9997 26.7498C19.9613 26.7498 18.9463 26.4418 18.0829 25.865C17.2196 25.2881 16.5466 24.4682 16.1493 23.5088C15.7519 22.5495 15.648 21.4939 15.8505 20.4755C16.0531 19.4571 16.5531 18.5217 17.2873 17.7874C18.0216 17.0532 18.957 16.5532 19.9754 16.3506C20.9938 16.1481 22.0494 16.252 23.0087 16.6494C23.9681 17.0467 24.788 17.7197 25.3649 18.583C25.9417 19.4464 26.2497 20.4614 26.2497 21.4998C26.2497 22.8921 25.6965 24.2275 24.712 25.2121C23.7274 26.1966 22.392 26.7498 20.9997 26.7498Z" fill="#23406F"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_118_656">
                      <rect width="42" height="42" fill="white" transform="translate(1.52588e-05 0.5)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="feature-title">Saúde Ocular Acessível</h3>
              <p className="feature-description">
                Levamos exames a quem mais precisa através de parcerias com ONGs, escolas e prefeituras.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_118_663)">
                    <path d="M31.6667 6.66667H30.8201L27.1801 1.94667C26.7109 1.34301 26.1106 0.854028 25.4245 0.516757C24.7384 0.179486 23.9846 0.00277174 23.2201 0L16.7801 0C16.0156 0.00277174 15.2617 0.179486 14.5756 0.516757C13.8895 0.854028 13.2892 1.34301 12.8201 1.94667L9.18006 6.66667H8.33339C6.12407 6.66931 4.00599 7.54814 2.44376 9.11037C0.881531 10.6726 0.00270746 12.7907 6.10352e-05 15L6.10352e-05 31.6667C0.00270746 33.876 0.881531 35.9941 2.44376 37.5563C4.00599 39.1185 6.12407 39.9974 8.33339 40H31.6667C33.8761 39.9974 35.9941 39.1185 37.5564 37.5563C39.1186 35.9941 39.9974 33.876 40.0001 31.6667V15C39.9974 12.7907 39.1186 10.6726 37.5564 9.11037C35.9941 7.54814 33.8761 6.66931 31.6667 6.66667V6.66667ZM15.4601 3.98333C15.6162 3.78176 15.8162 3.61844 16.045 3.5058C16.2737 3.39317 16.5251 3.33418 16.7801 3.33333H23.2201C23.475 3.33443 23.7263 3.39352 23.955 3.50614C24.1837 3.61876 24.3838 3.78194 24.5401 3.98333L26.6101 6.66667H13.3901L15.4601 3.98333ZM36.6667 31.6667C36.6667 32.9927 36.1399 34.2645 35.2023 35.2022C34.2646 36.1399 32.9928 36.6667 31.6667 36.6667H8.33339C7.00731 36.6667 5.73554 36.1399 4.79786 35.2022C3.86018 34.2645 3.33339 32.9927 3.33339 31.6667V15C3.33339 13.6739 3.86018 12.4021 4.79786 11.4645C5.73554 10.5268 7.00731 10 8.33339 10H31.6667C32.9928 10 34.2646 10.5268 35.2023 11.4645C36.1399 12.4021 36.6667 13.6739 36.6667 15V31.6667Z" fill="#23406F"/>
                    <path d="M20 13.3331C18.0222 13.3331 16.0888 13.9196 14.4443 15.0184C12.7998 16.1172 11.5181 17.679 10.7612 19.5063C10.0043 21.3336 9.8063 23.3442 10.1922 25.284C10.578 27.2238 11.5304 29.0057 12.9289 30.4042C14.3275 31.8027 16.1093 32.7551 18.0491 33.141C19.9889 33.5268 21.9996 33.3288 23.8268 32.5719C25.6541 31.8151 27.2159 30.5333 28.3147 28.8888C29.4135 27.2443 30 25.3109 30 23.3331C29.9974 20.6818 28.9429 18.1398 27.0682 16.265C25.1934 14.3902 22.6514 13.3358 20 13.3331V13.3331ZM20 29.9998C18.6815 29.9998 17.3925 29.6088 16.2962 28.8763C15.1999 28.1437 14.3454 27.1025 13.8408 25.8844C13.3362 24.6662 13.2042 23.3257 13.4614 22.0325C13.7187 20.7393 14.3536 19.5514 15.286 18.6191C16.2183 17.6867 17.4062 17.0518 18.6994 16.7946C19.9926 16.5373 21.3331 16.6693 22.5512 17.1739C23.7694 17.6785 24.8106 18.533 25.5431 19.6293C26.2757 20.7257 26.6667 22.0146 26.6667 23.3331C26.6667 25.1012 25.9643 26.7969 24.7141 28.0472C23.4638 29.2974 21.7681 29.9998 20 29.9998Z" fill="#23406F"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_118_663">
                      <rect width="40" height="40" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="feature-title">Triagem por Foto</h3>
              <p className="feature-description">
                Detecte sinais de catarata, glaucoma e outras doenças com apenas uma foto do seu olho.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_118_670)">
                    <path d="M32.1667 0.5H8.83335C6.62402 0.502646 4.50594 1.38147 2.94372 2.9437C1.38149 4.50593 0.502662 6.62401 0.500015 8.83333L0.500015 32.1667C0.502662 34.376 1.38149 36.4941 2.94372 38.0563C4.50594 39.6185 6.62402 40.4974 8.83335 40.5H32.1667C34.376 40.4974 36.4941 39.6185 38.0563 38.0563C39.6185 36.4941 40.4974 34.376 40.5 32.1667V8.83333C40.4974 6.62401 39.6185 4.50593 38.0563 2.9437C36.4941 1.38147 34.376 0.502646 32.1667 0.5V0.5ZM37.1667 32.1667C37.1667 33.4927 36.6399 34.7645 35.7022 35.7022C34.7645 36.6399 33.4928 37.1667 32.1667 37.1667H8.83335C7.50727 37.1667 6.2355 36.6399 5.29781 35.7022C4.36013 34.7645 3.83335 33.4927 3.83335 32.1667V8.83333C3.83335 7.50725 4.36013 6.23548 5.29781 5.2978C6.2355 4.36012 7.50727 3.83333 8.83335 3.83333H32.1667C33.4928 3.83333 34.7645 4.36012 35.7022 5.2978C36.6399 6.23548 37.1667 7.50725 37.1667 8.83333V32.1667Z" fill="#23406F"/>
                    <path d="M16.0547 27.0317L9.52305 20.5001C9.2105 20.1876 8.78666 20.0121 8.34472 20.0121C7.90278 20.0121 7.47893 20.1876 7.16638 20.5001C6.85393 20.8126 6.67841 21.2365 6.67841 21.6784C6.67841 22.1204 6.85393 22.5442 7.16638 22.8567L13.698 29.3884C14.0076 29.6981 14.3751 29.9437 14.7796 30.1113C15.1841 30.2789 15.6177 30.3652 16.0556 30.3652C16.4934 30.3652 16.927 30.2789 17.3315 30.1113C17.736 29.9437 18.1035 29.6981 18.4131 29.3884L33.833 13.9684C34.1455 13.6559 34.321 13.232 34.321 12.7901C34.321 12.3481 34.1455 11.9243 33.833 11.6118V11.6118C33.5205 11.2993 33.0967 11.1238 32.6547 11.1238C32.2128 11.1238 31.7889 11.2993 31.4764 11.6118L16.0547 27.0317Z" fill="#23406F"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_118_670">
                      <rect width="40" height="40" fill="white" transform="translate(0.500015 0.5)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="feature-title">Validação Médica</h3>
              <p className="feature-description">
                Resultados revisados por profissionais de saúde para um diagnóstico seguro e confiável
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="58" height="47" viewBox="0 0 58 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.84992">
                    <path d="M43.6973 9.50315C41.2007 6.49101 37.8316 4.31968 34.05 3.28553C30.2685 2.25139 26.2586 2.40483 22.5677 3.72491C18.877 5.04499 15.6851 7.46739 13.4278 10.6614C11.1705 13.8556 9.95794 17.6656 9.95538 21.5716V26.7537" stroke="#23406F" strokeWidth="4.92496" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.0117 37.7566C18.6299 40.52 22.0206 42.4368 25.7448 43.2589C29.4691 44.081 33.3554 43.7706 36.9005 42.3678C40.4455 40.965 43.4862 38.5345 45.6288 35.391C47.7713 32.2474 48.9172 28.5355 48.9178 24.736V21.2859" stroke="#23406F" strokeWidth="4.92496" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18.5805 18.2663C18.5696 18.4741 18.5007 18.6759 18.3779 18.8511L10.3067 30.2399C10.0841 30.5528 9.71758 30.7316 9.33315 30.7115C8.94873 30.6914 8.60301 30.4754 8.41441 30.1411L1.58263 17.9743C1.38463 17.6202 1.39402 17.1862 1.61085 16.8418C1.82627 16.4959 2.21182 16.2957 2.61858 16.317L17.5215 17.0949C17.9283 17.1162 18.2908 17.3553 18.4687 17.7218C18.5537 17.8944 18.5902 18.0823 18.5805 18.2663Z" fill="#23406F"/>
                    <path d="M39.8516 28.6356C39.8588 28.4304 39.9233 28.2301 40.0414 28.0553L47.8076 16.6804C48.0219 16.3679 48.3804 16.1852 48.7599 16.1984C49.1396 16.2116 49.4844 16.4187 49.6762 16.7453L56.6269 28.6321C56.8284 28.9781 56.8267 29.4065 56.6186 29.75C56.4121 30.095 56.0352 30.299 55.6335 30.285L40.9167 29.7731C40.515 29.7592 40.1532 29.5294 39.9714 29.1709C39.8845 29.0021 39.8452 28.8173 39.8516 28.6356Z" fill="#23406F"/>
                  </g>
                </svg>
              </div>
              <h3 className="feature-title">Monitoramento Contínuo</h3>
              <p className="feature-description">
                Acompanhe a saúde dos seus olhos com um histórico de resultados salvo em seu perfil.
              </p>
            </div>

            {/* Central Phone Section */}
            <div className="phone-section">
              <h2 className="phone-title">Sua visão em foco, a qualquer hora.</h2>
              <p className="phone-description">
                Acompanhe sua saúde ocular de forma simples e preventiva. Do primeiro exame ao monitoramento contínuo, o VisionHealth cuida da sua visão.
              </p>
                <div className="phone-screen">
                    <img 
                      src="/src/assets/iPhones.png" 
                      alt="VisionHealth App"
                      className="phone-screen-image"
                    />  
              </div>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section className="research-section">
          <div className="research-container">
            <span className="research-label">ABORDAGEM BASEADA EM DADOS DA SAÚDE GLOBAL</span>
            <h2 className="research-title">
              Mais de 80% dos casos de cegueira poderiam ser evitados com diagnóstico precoce.
            </h2>
            <p className="research-source">Organização Mundial da Saúde</p>
          </div>
        </section>

        {/* Healthcare Management Section */}
        <section className="healthcare-section">
          <div className="healthcare-container">
            <div className="healthcare-image">
              <img 
                src="src/assets/triagem.png" 
                alt="Eye screening interface"
                className="screening-image"
              />
            </div>
            <div className="healthcare-content">
              <h2 className="healthcare-title">Monitore sua saúde ocular de qualquer lugar</h2>
              <p className="healthcare-description">
                Tire uma foto, receba uma análise via Inteligência Artificial e tenha seu resultado validado por um especialista, tudo pelo nosso aplicativo.
              </p>
              <a href="https://prototipovision.vercel.app" 
              className="healthcare-button" 
              target='_blank'
              rel="noopener noreferrer">
              Agende uma demonstração gratuita</a>
            </div>
          </div>
        </section>

        {/* Forbes Testimonial Section */}
        <section className="forbes-section">
          <div className="forbes-container">
            <div className="forbes-content">
              <blockquote className="forbes-quote">
                A tecnologia de diagnóstico ocular por IA não é apenas uma promessa. Sistemas autônomos já são uma realidade aprovada por órgãos como o FDA, validando a eficácia e segurança da abordagem.
              </blockquote>
              <div className="forbes-source">Baseado em precedentes como EyeArt</div>
              <div className="slide-indicators">
                <div className="slide-indicator active"></div>
                <div className="slide-indicator"></div>
              </div>
            </div>
            <div className="forbes-image">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/98655c057fd6ff2890513a857bc83c238e636cbf?width=1368" 
                alt="Medical technology"
                className="forbes-photo"
              />
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section id="contato" className="cta-section">
          <div className="cta-container">
            <div className="cta-content">
              <p className="cta-text">
                A VisionHealth é a solução ideal para sua comunidade? 
                Leve triagem ocular acessível para sua cidade, escola ou ONG através de uma parceria. Agende uma conversa com nossa equipe.
              </p>
            </div>
            <a href='https://instagram.com/innovationhub.ufs' className="cta-button" target='blank' rel="noopener noreferrer">Entre em contato!</a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">VisionHealth</div>
          <div className="footer-copyright">© 2025 VisionHealth</div>
          <div className="footer-social">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 2.91005C16.0831 1.98416 14.991 1.25002 13.7875 0.750416C12.584 0.250812 11.2931 -0.00426317 9.99 5.38951e-05C4.53 5.38951e-05 0.0800002 4.45005 0.0800002 9.91005C0.0800002 11.6601 0.54 13.3601 1.4 14.8601L0 20.0001L5.25 18.6201C6.7 19.4101 8.33 19.8301 9.99 19.8301C15.45 19.8301 19.9 15.3801 19.9 9.92005C19.9 7.27005 18.87 4.78005 17 2.91005ZM9.99 18.1501C8.51 18.1501 7.06 17.7501 5.79 17.0001L5.49 16.8201L2.37 17.6401L3.2 14.6001L3 14.2901C2.17755 12.9771 1.74092 11.4593 1.74 9.91005C1.74 5.37005 5.44 1.67005 9.98 1.67005C12.18 1.67005 14.25 2.53005 15.8 4.09005C16.5676 4.85392 17.1759 5.7626 17.5896 6.76338C18.0033 7.76417 18.2142 8.83714 18.21 9.92005C18.23 14.4601 14.53 18.1501 9.99 18.1501ZM14.51 11.9901C14.26 11.8701 13.04 11.2701 12.82 11.1801C12.59 11.1001 12.43 11.0601 12.26 11.3001C12.09 11.5501 11.62 12.1101 11.48 12.2701C11.34 12.4401 11.19 12.4601 10.94 12.3301C10.69 12.2101 9.89 11.9401 8.95 11.1001C8.21 10.4401 7.72 9.63005 7.57 9.38005C7.43 9.13005 7.55 9.00005 7.68 8.87005C7.79 8.76005 7.93 8.58005 8.05 8.44005C8.17 8.30005 8.22 8.19005 8.3 8.03005C8.38 7.86005 8.34 7.72005 8.28 7.60005C8.22 7.48005 7.72 6.26005 7.52 5.76005C7.32 5.28005 7.11 5.34005 6.96 5.33005H6.48C6.31 5.33005 6.05 5.39005 5.82 5.64005C5.6 5.89005 4.96 6.49005 4.96 7.71005C4.96 8.93005 5.85 10.1101 5.97 10.2701C6.09 10.4401 7.72 12.9401 10.2 14.0101C10.79 14.2701 11.25 14.4201 11.61 14.5301C12.2 14.7201 12.74 14.6901 13.17 14.6301C13.65 14.5601 14.64 14.0301 14.84 13.4501C15.05 12.8701 15.05 12.3801 14.98 12.2701C14.91 12.1601 14.76 12.1101 14.51 11.9901Z" fill="#141414"/>
            </svg>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VisionHealth;

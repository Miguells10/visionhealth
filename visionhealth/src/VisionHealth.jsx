import React from "react";

function VisionHealth() {
  return (
    <div className="visionhealth-page">
      <header className="main-header">
        <div className="header-logo">
          <img
            src="https://api.builder.io/api/v1/image/assets/81f367b6b0ea4e0c88ecb5391143e057/b29b8aae2ee15186f741d8c75fb947d5045604d9?placeholderIfAbsent=true"
            alt="VisionHealth Logo"
            className="logo-image"
          />
          <div className="logo-text">VisionHealth</div>
        </div>
        <nav className="main-nav">
          <div className="nav-links">
            <div className="nav-link">Quem Somos</div>
            <div className="nav-link">Diferenciais</div>
            <div className="nav-link">Contato</div>
          </div>
        </nav>
        <div className="cta-button-header">
          <div>Experimente Agora</div>
        </div>
      </header>

      <main className="main-content">
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-text-container">
              <h1 className="hero-title">
                Você merece enxergarmelhor.
              </h1>
              <p className="hero-description">
                Por menos do que o custo de uma consulta tradicional,
                oferecemos triagem ocular digital com IA, validação
                profissional e orientação personalizada.
              </p>
            </div>
            <div className="hero-image-container">
              <img
                src="https://api.builder.io/api/v1/image/assets/81f367b6b0ea4e0c88ecb5391143e057/f8e8eba2691e41b3e23ae6b0fdfca11fe729cdfb?placeholderIfAbsent=true"
                alt="Vision Health App Interface"
                className="hero-image"
              />
            </div>
          </div>
          <div className="hero-cta-button">
            <div>Experimente Grátis Agora</div>
          </div>
        </section>

        <section className="about-section">
          <div className="section-container">
            <div className="section-subtitle">QUEM SOMOS</div>
            <div className="section-description">
              A VisionHealth é a primeira solução digital de triagem ocular
              que combina inteligência artificial, acompanhamento médico e
              educação preventiva. Descubra se ele é ideal para você.
            </div>
            <div className="cta-buttons-container">
              <div className="primary-cta-button">
                <div>Agende uma demonstração gratuita</div>
              </div>
              <div className="secondary-cta-button-wrapper">
                <div className="secondary-cta-button">
                  <div>Saiba como funciona</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonial-section">
          <div className="testimonial-container">
            <div className="testimonial-text-container">
              <h2 className="testimonial-title">
                A sua saúde, redesenhada para você.
              </h2>
              <p className="testimonial-description">
                Imagine conquistar uma saúde plena e duradoura, com a
                tranquilidade de saber que você está economizando
                significativamente. É isso que nossa plataforma oferece: um
                futuro com mais bem-estar e menos despesas com tratamentos e
                especialistas.
              </p>
              <div className="testimonial-cta-button">
                <div>Agendar uma demonstração gratuita.</div>
              </div>
            </div>
            <div className="testimonial-card-container">
              <div className="testimonial-card">
                <div className="quote-mark">"</div>
                <div className="testimonial-content">
                  <div className="testimonial-text">
                    Eu sempre me preocupei com a saúde dos meus olhos, mas a
                    correria do dia a dia acabava me afastando de um cuidado
                    mais constante. O VisionHealth mudou completamente esse
                    cenário. Ele me deu a segurança e a ferramenta para cuidar
                    da minha visão de forma simples e proativa, usando apenas
                    o meu celular. Agora, eu não só acompanho minha saúde
                    ocular sem complicação, como também tenho a tranquilidade
                    de saber que estou monitorando qualquer pequena mudança de
                    perto. É a paz de espírito na palma da minha mão.
                  </div>
                  <div className="testimonial-author">Maria</div>
                  <div className="testimonial-location">ARACAJU/SE</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="features-container">
            <div className="features-grid">
              <div className="features-column-left">
                <div className="feature-card">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/81f367b6b0ea4e0c88ecb5391143e057/3d5fcb1846808b597672e43d2e2bb3bf4e86f36d?placeholderIfAbsent=true"
                    alt="Accessible Icon"
                    className="feature-icon"
                  />
                  <div className="feature-content">
                    <div className="feature-title">Saúde Ocular Acessível</div>
                    <div className="feature-description">
                      Levamos exames a quem mais precisa através de parcerias
                      com ONGs, escolas e prefeituras.
                    </div>
                  </div>
                </div>
                <div className="feature-card">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/81f367b6b0ea4e0c88ecb5391143e057/e92dce15b3ba9b78ed84b9803b7db52e2529cb11?placeholderIfAbsent=true"
                    alt="Medical Validation Icon"
                    className="feature-icon"
                  />
                  <div className="feature-content">
                    <div className="feature-title">Validação Médica</div>
                    <div className="feature-description">
                      Resultados revisados por profissionais de saúde para um
                      diagnóstico seguro e confiável
                    </div>
                  </div>
                </div>
              </div>

              <div className="features-column-center">
                <div className="main-feature-card">
                  <div className="main-feature-title">
                    Sua visão em foco, a qualquer hora.
                  </div>
                  <div className="main-feature-description">
                    Acompanhe sua saúde ocular de forma simples e preventiva. Do
                    primeiro exame ao monitoramento contínuo, o VisionHealth
                    cuida da sua visão.
                  </div>
                  <img
                    src="https://api.builder.io/api/v1/image/assets/81f367b6b0ea4e0c88ecb5391143e057/305c3a92a1c84abe82d31701265d69249ffb3640?placeholderIfAbsent=true"
                    alt="VisionHealth App"
                    className="main-feature-image"
                  />
                </div>
              </div>

              <div className="features-column-right">
                <div className="feature-card">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/81f367b6b0ea4e0c88ecb5391143e057/6690606dc87d1a04bb56c47d72e81350f1735bc8?placeholderIfAbsent=true"
                    alt="Photo Screening Icon"
                    className="feature-icon"
                  />
                  <div className="feature-content">
                    <div className="feature-title">Triagem por Foto</div>
                    <div className="feature-description">
                      Detecte sinais de catarata, glaucoma e outras doenças
                      com apenas uma foto do seu olho.
                    </div>
                  </div>
                </div>
                <div className="feature-card">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/81f367b6b0ea4e0c88ecb5391143e057/aa5ad4b488e47bdcac72bbb6ccd3c476bbb6e2ff?placeholderIfAbsent=true"
                    alt="Continuous Monitoring Icon"
                    className="feature-icon"
                  />
                  <div className="feature-content">
                    <div className="feature-title">Monitoramento Contínuo</div>
                    <div className="feature-description">
                      Acompanhe a saúde dos seus olhos com um histórico de
                      resultados salvo em seu perfil.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="data-section">
          <div className="data-container">
            <div className="data-subtitle">
              Abordagem Baseada em Dados da Saúde Global
            </div>
            <div className="data-title">
              Mais de 80% dos casos de cegueira poderiam ser evitados com
              diagnóstico precoce.
            </div>
            <div className="data-source">Organização Mundial da Saúde</div>
          </div>
        </section>

        <section className="app-section">
          <div className="app-container">
            <div className="app-grid">
              <div className="app-image-column">
                <div className="app-image-container">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/81f367b6b0ea4e0c88ecb5391143e057/e8d2ac75c72c3554764d3dd5a5270a85052525fc?placeholderIfAbsent=true"
                    alt="Background"
                    className="app-background"
                  />
                  <img
                    src="https://api.builder.io/api/v1/image/assets/81f367b6b0ea4e0c88ecb5391143e057/796599d8df2cd7fc2bee86af1bf2bfaa25b6e509?placeholderIfAbsent=true"
                    alt="VisionHealth App Interface"
                    className="app-main-image"
                  />
                  <div className="app-store-badges">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/81f367b6b0ea4e0c88ecb5391143e057/02348ddd22e6f919f417289bf47d7b6a8141a7a5?placeholderIfAbsent=true"
                      alt="App Store"
                      className="store-badge"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/81f367b6b0ea4e0c88ecb5391143e057/c91d1f166343cbbf7cee50902352e185224337fe?placeholderIfAbsent=true"
                      alt="Google Play"
                      className="store-badge-google"
                    />
                  </div>
                  <div className="app-rating">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/81f367b6b0ea4e0c88ecb5391143e057/397f5078e04e64d0d77c38029f7e27f319225526?placeholderIfAbsent=true"
                      alt="5 stars"
                      className="rating-stars"
                    />
                  </div>
                </div>
              </div>
              <div className="app-text-column">
                <div className="app-content">
                  <h2 className="app-title">
                    Monitore sua saúde ocular de qualquer lugar
                  </h2>
                  <p className="app-description">
                    Tire uma foto, receba uma análise via Inteligência
                    Artificial e tenha seu resultado validado por um
                    especialista, tudo pelo nosso aplicativo.
                  </p>
                  <div className="app-cta-button">
                    <div>Agende uma demonstração gratuita</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="tech-section">
          <div className="tech-container">
            <div className="tech-grid">
              <div className="tech-text-column">
                <div className="tech-content">
                  <div className="tech-quote">
                    A tecnologia de diagnóstico ocular por IA não é apenas uma
                    promessa. Sistemas autônomos já são uma realidade aprovada
                    por órgãos como o FDA, validando a eficácia e segurança da
                    abordagem.
                  </div>
                  <div className="tech-source">
                    Baseado em precedentes como EyeArt
                  </div>
                  <div className="slide-indicators">
                    <div className="slide-indicator active"></div>
                    <div className="slide-indicator"></div>
                  </div>
                </div>
              </div>
              <div className="tech-image-column">
                <img
                  src="https://api.builder.io/api/v1/image/assets/81f367b6b0ea4e0c88ecb5391143e057/beda09ebdc7c94c1792cc4254fd7feabf05b78b9?placeholderIfAbsent=true"
                  alt="Technology demonstration"
                  className="tech-image"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="partnership-section">
          <div className="partnership-container">
            <div className="partnership-text">
              A VisionHealth é a solução ideal para sua comunidade? <br />
              Leve triagem ocular acessível para sua cidade, escola ou ONG
              através de uma parceria. Agende uma conversa com nossa equipe.
            </div>
            <div className="partnership-cta-button">
              <div>Entre em contato!</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-logo">VisionHealth</div>
          <div className="footer-copyright">© 2025 VisionHealth</div>
          <img
            src="https://api.builder.io/api/v1/image/assets/81f367b6b0ea4e0c88ecb5391143e057/a045745b5e2f90779ac8e2d695ca9c78e91ae6b9?placeholderIfAbsent=true"
            alt="Footer icon"
            className="footer-icon"
          />
        </div>
      </footer>
    </div>
  );
}

export default VisionHealth;

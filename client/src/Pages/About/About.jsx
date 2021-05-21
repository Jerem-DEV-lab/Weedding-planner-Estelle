import React               from 'react'
import Footer              from '../../Components/Footer/Footer'
import Nav                 from '../../Components/NavBar/Nav'
import { Container, Grid } from '@material-ui/core'

const About = () => {
  return <>
    <Nav bgColor="#FFF" typoColor="#000"/>
    <section>
      <Container maxWidth="lg">
        <Grid container={true} spacing={4}>
          <Grid item={true} xs={12} lg={6}>
            <p className="section-content">
              Je m'appelle Estelle, j'ai 28 ans et je suis Fleuriste depuis plus de 10 ans. Passionnée par mon métier
              j'aime
              vous accompagner dans l'élaboration de votre scénographie florale avec dévouement et bonheur.
              D'années en années j'ai constitué autour de moi un groupe de prestataires sérieux, passionnés et
              passionnants
              ce qui me permet de vous proposer une organisation complète de tous vos événements privés avec la rigueur,
              l’expertise et le savoir-faire de l’artisanat français.
              Je suis également formée pour organiser et officier vos cérémonies laïques, je vous accompagne de À à Z
              sur la
              préparation et la réalisation de votre cérémonie personnalisée. Joie, rires, Amour et Emotions sont les
              maitres mots lors de ce chaleureux moment que je partage avec vous.
              
              Le partage de mes passions et le bien être de mes clients sont des valeurs importantes chez moi, c'est
              donc
              avec plaisir que je vous accueille pour des ateliers d'art floral de loisir à domicile ou au sein de mon «
              Concept store » à Bersac sur rivalier au coeur de la campagne limousine.
              Dotée du diplôme de Praticienne en Art thérapie je vous aide à évacuer vos tracas du quotidien lors d’une
              séance découverte, d’initiation ou approfondie en utilisant différents médiums artistiques. (Photographie,
              peinture, dessin, aquarelle…).
              Cette méthode de développement personnelle est pour moi le moyen de vous aider et de transmettre ma
              bienveillance et mon énergie pour vous aider à vous sentir mieux.
              Mon rôle est aussi de vous accompagner lors des épreuves plus douloureuses de votre vie, en effet je
              fleuris
              et officie lors des cérémonie d’adieu, afin de rendre un dernier hommage à votre proche disparu.
              Discrète et passionnée par mon métier et mes activités d’organisation et de développement personnel, je
              serai
              ravie de vous accompagner pour tous les évènements de votre vie.
              Enfin si le métier de fleuriste vous intéresse je serai ravie de vous transmettre les bases
              professionnelles
              au travers de mon activité de formatrice en Botanique, art floral, technologie professionnelle et Vente au
              Lycée Saint jean à Limoges. <br/>
              A bientôt pour de nouvelles aventures !
            </p>
          </Grid>
          <Grid item={true} xs={12} lg={6}>
            <div style={{maxHeight:"770px", overflow: 'hidden'}}>
              <img src="/assets/about-me.jpg" alt=""/>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
    <Footer/>
  </>
}

export default About

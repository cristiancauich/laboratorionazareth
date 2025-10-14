<script setup>
import { themeColor } from "../data/items";
import mainPhoto from "../assets/images/about.svg";

const heading = "About";
const subHeading = "About Us";
const totalMembers = "50";
const totalTeam = "20";
</script>

<template>
  <div class="untree_co-section" id="about-section">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-8" data-aos="fade-up" data-aos-delay="100">
          <img :src="mainPhoto" alt="Image" class="img-fluid" />
        </div>
        <div class="col-lg-4">
          <div class="mb-4" data-aos="fade-up" data-aos-delay="0">
            <span class="caption" :style="[{ color: themeColor }]">{{
              heading
            }}</span>
            <h2 class="heading">{{ subHeading }}</h2>
          </div>
          <div class="mb-4" data-aos="fade-up" data-aos-delay="100">
            <p>
              
              Somos un laboratorio de análisis clínicos comprometidos con la salud y el bienestar de nuestros pacientes. 
              
            </p>
            <p>
              Nuestro equipo de profesionales altamente capacitados utiliza la
              <span class="highlight"
                >tecnología más avanzada</span
              > para obtener resultados precisos y confiables..
            </p>
          </div>
          <ul
            class="list-unstyled ul-check primary mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <li>There live the blind texts</li>
            <li>Far far away behind the word</li>
            <li>Their place and supplies</li>
          </ul>
          <div class="row count-numbers">
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="0">
              <span class="counter d-block"
                ><span :data-number="totalMembers">{{ totalMembers }}</span
                ><span>M</span></span
              >
              <span class="caption-2">Members</span>
            </div>
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <span class="counter d-block"
                ><span :data-number="totalTeam">{{ totalTeam }}</span
                ><span></span
              ></span>
              <span class="caption-2">Team</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
    import Booking from '../components/Booking.vue'
    import scrollText from '../components/icons/scrollText.vue'
    import stethoscope from '../components/icons/stethoscope.vue'
    import lightBulb from '../components/icons/lightBulb.vue'
</script>

<template>
    <div class="py-12 md:py-20 xl:py-24">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 xl:grid-cols-12 gap-8 2xl:gap-12">
                <div class="w-full xl:col-span-5 2xl:col-span-6 ">
                    <h1 class="font-bold text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-secondary mb-6 xl:mb-8" data-aos="fade-up" data-aos-delay="0">
                        Química sanguínea de 50 elementos
                    </h1>

                    <p class="font-montserrat text-sm lg:text-base" data-aos="fade-up" data-aos-delay="100">
                        La química sanguínea de 50 elementos es un estudio completo que evalúa el funcionamiento general del organismo.
                        <br>
                        <br>
                        A través de una sola muestra de sangre, permite detectar alteraciones en órganos vitales como el hígado, riñones, páncreas y corazón, además de ofrecer una visión detallada del metabolismo de lípidos, proteínas, electrolitos y enzimas.
                        <br>
                        <br>
                        Es uno de los análisis más completos disponibles, recomendado tanto para revisiones preventivas como para seguimiento médico de condiciones crónicas.
                    </p>

                    <p class="font-montserrat font-semibold text-sm lg:text-base flex items-center gap-3 mt-6 xl:mt-8 mb-4 xl:mb-6" data-aos="fade-up" data-aos-delay="200">
                        <scrollText class="text-primary" />
                        Incluye:
                    </p>

                    <ul class="list-disc pl-4 mb-6 xl:mb-8 text-sm lg:text-base" data-aos="fade-up" data-aos-delay="300">
                        <li>Glucosa, colesterol total, HDL, LDL y triglicéridos</li>
                        <li>Ácido úrico, urea y creatinina (función renal)</li>
                        <li>Bilirrubinas, fosfatasa alcalina, AST, ALT, GGT (función hepática)</li>
                        <li>Calcio, sodio, potasio, cloro (electrolitos)</li>
                        <li>Proteínas totales, albúmina, globulina</li>
                        <li>Enzimas y metabolitos adicionales que ayudan a detectar deficiencias, inflamación o desequilibrio metabólico</li>
                    </ul>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8">
                        <div class="bg-secondary p-6 xl:p-8 rounded-xl text-white" data-aos="fade-up" data-aos-delay="200">
                            <p class="font-montserrat font-semibold text-sm lg:text-base flex items-center gap-3 mb-4 xl:mb-6">
                                <stethoscope class="text-tertiary" />
                                Recomendaciones:
                            </p>

                            <ul class="list-disc pl-4 mb-6 xl:mb-8 text-xs lg:text-sm">
                                <li>Ayuno mínimo de 8 a 12 horas antes de la toma de muestra.</li>
                                <li>Evitar consumo de alcohol y comidas muy grasosas 24 horas previas.</li>
                                <li>Informar al personal si está bajo tratamiento médico o tomando suplementos.</li>
                            </ul>
                        </div>

                        <div class="bg-secondary p-6 xl:p-8 rounded-xl text-white" data-aos="fade-up" data-aos-delay="300">
                            <p class="font-montserrat font-semibold text-sm lg:text-base flex items-center gap-3 mb-4 xl:mb-6">
                                <lightBulb class="text-tertiary" />
                                Ideal para:
                            </p>

                            <ul class="list-disc pl-4 mb-6 xl:mb-8 text-xs lg:text-sm">
                                <li>Chequeos médicos preventivos completos.</li>
                                <li>Monitoreo de enfermedades crónicas como diabetes, hipertensión o dislipidemia.</li>
                                <li>Evaluación general del estado de salud antes de cirugías o tratamientos.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="xl:col-span-7 2xl:col-span-6 grid grid-cols-1 xl:grid-cols-12">
                    <div class="xl:col-start-2 xl:col-span-11 bg-primary p-4 md:p-12 2xl:p-16">
                        <h2 class="font-semibold text-2xl md:text-3xl lg:text-3xl 2xl:text-4xl text-white mb-4 xl:mb-6" data-aos="fade-up" data-aos-delay="0">
                            Agenda tu cita
                        </h2>

                        <p class="font-montserrat text-sm lg:text-base text-white mb-6 xl:mb-8" data-aos="fade-up" data-aos-delay="100">
                            Programa tu estudio de forma rápida y sencilla. Nuestro equipo te atenderá en el horario que más te convenga.
                        </p>
                        
	                    <Booking data-aos="fade-up" data-aos-delay="200" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
	import { ref } from 'vue'
	import Swal from 'sweetalert2'
    import vSelect from 'vue-select'
    import "vue-select/dist/vue-select.css"
    import VueDatePicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'

	const appointment = ref({
        analysis: [],
		date: '',
        schedule: '',
        appointment_for: 'Para mí',
        relationship: '',
        name: '',
		surname: '',
        birthdate: '',
        gender: 'Hombre',
		email: '',
		phone: '',
		payment_type: 'Pago en clínica',
	})

	const errors = ref({
        analysis: null,
        date: null,
        schedule: null,
        appointment_for: null,
        relationship: null,
		name: null,
		surname: null,
        birthdate: null,
        gender: null,
		email: null,
		phone: null,
		payment_type: null,
	})

	const isLoading = ref(false)
    const options = ["Química sanguinea", "Perfil tiroideo", "Vitamina D", "Tipo de sangre"]
    const schedules = ["01:00 pm", "02:00 pm", "03:00 pm", "04:00 pm"]
    const relationship = ["Esposo/a", "Hijo/a", "Padre", "Madre", "Hermano/a", "Sobrino/a", "Tío/a"]

	const isValidEmail = (value) => {
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		return emailPattern.test(value)
	}

	const handleSubmit = () => {
		isLoading.value = true
		let hasError = false

		// Resetear errores
		Object.keys(errors.value).forEach((key) => (errors.value[key] = null))

		// Validaciones
		if (!appointment.value.name) {
			errors.value.name = 'Por favor ingresa un nombre.'
			hasError = true
		}

		if (!appointment.value.surname) {
			errors.value.surname = 'Por favor ingresa un apellido.'
			hasError = true
		}

		if (appointment.value.email && !isValidEmail(appointment.value.email)) {
			errors.value.email = 'Por favor ingresa un correo electrónico válido.'
			hasError = true
		}

		if (hasError) {
			isLoading.value = false
			return
		}

		// Simulación de envío
		setTimeout(() => {
			isLoading.value = false

			Swal.fire({
				title: "Cita agendada exitosamente",
				text: "Su cita ha sido agendada con éxito, favor de asistir con al menos 10 min de anticipación.",
				icon: "success",
				confirmButtonText: "Aceptar",
				confirmButtonColor: "#06A8BF",
				allowOutsideClick: false,
			})

			// Limpiar formulario
			Object.keys(appointment.value).forEach((key) => (appointment.value[key] = ''))
		}, 2000)
	}
</script>

<template>
	<form @submit.prevent="handleSubmit" class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="md:col-span-2 flex flex-col gap-1">
                <label for="analysis" class="inline-block font-montserrat font-medium text-white">Seleccione al menos un estudio</label>
                <v-select v-model="appointment.analysis" :options="options" placeholder="Seleccionar" multiple />

                <span v-if="errors.analysis" class="text-xs text-red-700">
                    {{ errors.analysis }}
                </span>
            </div>

            <div class="flex flex-col gap-1">
                <label for="date" class="inline-block font-montserrat font-medium text-white">Fecha</label>
                <VueDatePicker v-model="appointment.date" :enable-time-picker="false" :auto-apply="true" locale="es" :format="'dd/MM/yyyy'" placeholder="Seleccione una fecha"></VueDatePicker>

                <span v-if="errors.date" class="text-xs text-red-700">
                    {{ errors.date }}
                </span>
            </div>

            <div class="flex flex-col gap-1">
                <label for="schedule" class="inline-block font-montserrat font-medium text-white">Horario</label>
                <v-select v-model="appointment.schedule" :options="schedules" placeholder="Seleccionar" />

                <span v-if="errors.schedule" class="text-xs text-red-700">
                    {{ errors.schedule }}
                </span>
            </div>
        </div>

        <div class="md:col-span-2 flex flex-col gap-3">
            <div class="font-semibold text-lg xl:text-xl text-white">¿Para quién es la cita?</div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="flex flex-row gap-4">
                    <div class="relative">
                        <input type="radio" v-model="appointment.appointment_for" value="Para mí" name="appointmen_for" id="me" class="peer absolute size-px opacity-0">
                        <label for="me" class="bg-transparent py-3 px-4 rounded-lg border-2 border-white inline-block font-montserrat font-medium text-white cursor-pointer transitioning peer-checked:bg-secondary peer-checked:border-secondary">
                            Para mí
                        </label>
                    </div>

                    <div class="relative">
                        <input type="radio" v-model="appointment.appointment_for" value="Otra persona" name="appointmen_for" id="other_person" class="peer absolute size-px opacity-0">
                        <label for="other_person" class="bg-transparent py-3 px-4 rounded-lg border-2 border-white inline-block font-montserrat font-medium text-white cursor-pointer transitioning peer-checked:bg-secondary peer-checked:border-secondary">
                            Otra persona
                        </label>
                    </div>
                </div>

                <div class="block w-full">
                    <v-select v-model="appointment.relationship" :options="relationship" placeholder="Seleccionar parentesco" />
                </div>
            </div>
        </div>

        <div class="md:col-span-2 flex flex-col gap-3">
            <div class="font-semibold text-lg xl:text-xl text-white">Datos personales</div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="flex flex-col gap-1">
                    <label for="name" class="inline-block font-montserrat font-medium text-white">Nombre(s)</label>
                    <input type="text" id="name" name="name" v-model="appointment.name" class="w-full bg-white py-3 px-4 rounded-lg border border-primary outline-none font-montserrat placeholder:text-dark-grey transitioning focus:border-secondary" placeholder="Escribe aquí">

                    <span v-if="errors.name" class="text-xs text-red-700">
                        {{ errors.name }}
                    </span>
                </div>

                <div class="flex flex-col gap-1">
                    <label for="surname" class="inline-block font-montserrat font-medium text-white">Apellido(s)</label>
                    <input type="text" id="surname" name="surname" v-model="appointment.surname" class="w-full bg-white py-3 px-4 rounded-lg border border-primary outline-none font-montserrat placeholder:text-dark-grey transitioning focus:border-secondary" placeholder="Escribe aquí">

                    <span v-if="errors.surname" class="text-xs text-red-700">
                        {{ errors.surname }}
                    </span>
                </div>

                <div class="flex flex-col gap-1">
                    <label for="birthdate" class="inline-block font-montserrat font-medium text-white">Fecha de nacimiento</label>
                    <VueDatePicker v-model="appointment.birthdate" :enable-time-picker="false" :auto-apply="true" locale="es" :format="'dd/MM/yyyy'" placeholder="Seleccione una fecha"></VueDatePicker>

                    <span v-if="errors.birthdate" class="text-xs text-red-700">
                        {{ errors.birthdate }}
                    </span>
                </div>

                <div class="flex flex-col gap-1">
                    <label for="gender" class="inline-block font-montserrat font-medium text-white">Genero</label>
                    <div class="flex flex-row gap-4">
                        <div class="relative">
                            <input type="radio" name="gender" v-model="appointment.gender" value="Hombre" id="man" class="peer absolute size-px opacity-0">
                            <label for="man" class="bg-transparent py-3 px-4 rounded-lg border-2 border-white inline-block font-montserrat font-medium text-white cursor-pointer transitioning peer-checked:bg-secondary peer-checked:border-secondary">
                                Hombre
                            </label>
                        </div>

                        <div class="relative">
                            <input type="radio" name="gender" v-model="appointment.gender" value="Mujer" id="woman" class="peer absolute size-px opacity-0">
                            <label for="woman" class="bg-transparent py-3 px-4 rounded-lg border-2 border-white inline-block font-montserrat font-medium text-white cursor-pointer transitioning peer-checked:bg-secondary peer-checked:border-secondary">
                                Mujer
                            </label>
                        </div>

                        <div class="relative">
                            <input type="radio" name="gender" v-model="appointment.gender" value="Otro" id="other" class="peer absolute size-px opacity-0">
                            <label for="other" class="bg-transparent py-3 px-4 rounded-lg border-2 border-white inline-block font-montserrat font-medium text-white cursor-pointer transitioning peer-checked:bg-secondary peer-checked:border-secondary">
                                Otro
                            </label>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col gap-1">
                    <label for="email" class="inline-block font-montserrat font-medium text-white">Correo electrónico</label>
                    <input type="email" id="email" name="email" v-model="appointment.email" class="w-full bg-white py-3 px-4 rounded-lg border border-primary outline-none font-montserrat placeholder:text-dark-grey transitioning focus:border-secondary" placeholder="Escribe aquí">

                    <span v-if="errors.email" class="text-xs text-red-700">
                        {{ errors.email }}
                    </span>
                </div>

                <div class="flex flex-col gap-1">
                    <label for="phone" class="inline-block font-montserrat font-medium text-white">Teléfono</label>
                    <input type="text" id="phone" name="phone" v-model="appointment.phone" class="w-full bg-white py-3 px-4 rounded-lg border border-primary outline-none font-montserrat placeholder:text-dark-grey transitioning focus:border-secondary" placeholder="Escribe aquí">

                    <span v-if="errors.phone" class="text-xs text-red-700">
                        {{ errors.phone }}
                    </span>
                </div>
            </div>
        </div>

        <div class="md:col-span-2 flex flex-col gap-3">
            <div class="font-semibold text-lg xl:text-xl text-white">Método de pago</div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="flex flex-row gap-4">
                    <div class="relative">
                        <input type="radio" v-model="appointment.payment_type" name="payment_method" value="Pago en clínica" id="clinic" class="peer absolute size-px opacity-0">
                        <label for="clinic" class="bg-transparent py-3 px-4 rounded-lg border-2 border-white inline-block font-montserrat font-medium text-white cursor-pointer transitioning peer-checked:bg-secondary peer-checked:border-secondary">
                            Pago en clínica
                        </label>
                    </div>
                </div>
            </div>
        </div>

		<div class="md:col-span-2 text-right">
			<button type="submit" class="py-2 md:py-3 px-6 md:px-8 bg-tertiary rounded-full font-semibold text-secondary transitioning hover:bg-secondary hover:text-white hover:shadow-md">
				<span v-if="!isLoading">Agendar cita</span>
                <div v-else class="button-loader mx-auto"></div>
			</button>
		</div>
	</form>
</template>

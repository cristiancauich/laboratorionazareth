<script setup>
	import { ref } from 'vue'
	import Swal from 'sweetalert2'

	const contact = ref({
		name: '',
		surname: '',
		email: '',
		phone: '',
		message: '',
	})

	const errors = ref({
		name: null,
		surname: null,
		email: null,
		phone: null,
		message: null,
	})

	const isLoading = ref(false)

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
		if (!contact.value.name) {
			errors.value.name = 'Por favor ingresa un nombre.'
			hasError = true
		}

		if (!contact.value.surname) {
			errors.value.surname = 'Por favor ingresa un apellido.'
			hasError = true
		}

		if (contact.value.email && !isValidEmail(contact.value.email)) {
			errors.value.email = 'Por favor ingresa un correo electrónico válido.'
			hasError = true
		}

		if (!contact.value.message) {
			errors.value.message = 'Por favor ingresa un mensaje.'
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
				title: "Mensaje enviado",
				text: "Tu mensaje ha sido enviado, nos pondremos en contacto contigo lo antes posible.",
				icon: "success",
				confirmButtonText: "Aceptar",
				confirmButtonColor: "#06A8BF",
				allowOutsideClick: false,
			})

			// Limpiar formulario
			Object.keys(contact.value).forEach((key) => (contact.value[key] = ''))
		}, 2000)
	}
</script>

<template>
	<form @submit.prevent="handleSubmit" class="grid grid-cols-1 md:grid-cols-2 gap-6">
		<div class="flex flex-col gap-1">
			<label for="name" class="inline-block font-montserrat font-medium">Nombre(s)</label>
            <input type="text" id="name" name="name" v-model="contact.name" class="w-full bg-white py-3 px-4 rounded-lg border border-primary outline-none font-montserrat placeholder:text-dark-grey transitioning focus:border-secondary" placeholder="Escribe aquí">

			<span v-if="errors.name" class="text-xs text-red-700">
				{{ errors.name }}
			</span>
		</div>

		<div class="flex flex-col gap-1">
			<label for="surname" class="inline-block font-montserrat font-medium">Apellido(s)</label>
            <input type="text" id="surname" name="surname" v-model="contact.surname" class="w-full bg-white py-3 px-4 rounded-lg border border-primary outline-none font-montserrat placeholder:text-dark-grey transitioning focus:border-secondary" placeholder="Escribe aquí">

			<span v-if="errors.surname" class="text-xs text-red-700">
				{{ errors.surname }}
			</span>
		</div>

		<div class="flex flex-col gap-1">
			<label for="email" class="inline-block font-montserrat font-medium">Correo electrónico</label>
            <input type="email" id="email" name="email" v-model="contact.email" class="w-full bg-white py-3 px-4 rounded-lg border border-primary outline-none font-montserrat placeholder:text-dark-grey transitioning focus:border-secondary" placeholder="Escribe aquí">

			<span v-if="errors.email" class="text-xs text-red-700">
				{{ errors.email }}
			</span>
		</div>

		<div class="flex flex-col gap-1">
			<label for="phone" class="inline-block font-montserrat font-medium">Teléfono</label>
            <input type="text" id="phone" name="phone" v-model="contact.phone" class="w-full bg-white py-3 px-4 rounded-lg border border-primary outline-none font-montserrat placeholder:text-dark-grey transitioning focus:border-secondary" placeholder="Escribe aquí">

			<span v-if="errors.phone" class="text-xs text-red-700">
				{{ errors.phone }}
			</span>
		</div>

		<div class="md:col-span-2 flex flex-col gap-1">
			<label for="message" class="inline-block font-montserrat font-medium">Mensaje</label>
            <textarea id="message" name="message" v-model="contact.message" rows="5" class="w-full bg-white py-3 px-4 rounded-lg border border-primary outline-none font-montserrat placeholder:text-dark-grey transitioning focus:border-secondary" placeholder="Escribe aquí"></textarea>

			<span v-if="errors.message" class="text-xs text-red-700">
				{{ errors.message }}
			</span>
		</div>

		<div class="md:col-span-2 text-right">
			<button type="submit" class="py-2 md:py-3 px-6 md:px-8 bg-secondary rounded-full font-semibold text-white transitioning hover:bg-primary hover:text-white hover:shadow-md">
				<span v-if="!isLoading">Enviar mensaje</span>
                <div v-else class="button-loader mx-auto"></div>
			</button>
		</div>
	</form>
</template>

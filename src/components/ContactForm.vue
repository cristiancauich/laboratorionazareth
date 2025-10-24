<script setup>
import { themeColor, contactInfo } from "../data/items";

const heading = "Contáctanos";
const subHeading = "Far from the countries Vokalia and Consonantia";
const contactInfoHeading = "Información de Contacto";
const buttonSendMessage = "Send Message";
const labels = {
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email Address",
  message: "Message",
};
</script>

<template>
	<form action="" class="grid grid-cols-1 md:grid-cols-2 gap-6">
		<div class="flex flex-col gap-1">
			<label for="name" class="inline-block font-montserrat font-medium">Nombre(s)</label>
            <input type="text" name="name" class="w-full bg-white py-3 px-4 rounded-lg border border-primary outline-none font-montserrat placeholder:text-dark-grey transitioning focus:border-secondary" placeholder="Escribe aquí">
		</div>

		<div class="flex flex-col gap-1">
			<label for="surname" class="inline-block font-montserrat font-medium">Apellido(s)</label>
            <input type="text" name="surname" class="w-full bg-white py-3 px-4 rounded-lg border border-primary outline-none font-montserrat placeholder:text-dark-grey transitioning focus:border-secondary" placeholder="Escribe aquí">
		</div>

		<div class="flex flex-col gap-1">
			<label for="email" class="inline-block font-montserrat font-medium">Correo electrónico</label>
            <input type="email" name="email" class="w-full bg-white py-3 px-4 rounded-lg border border-primary outline-none font-montserrat placeholder:text-dark-grey transitioning focus:border-secondary" placeholder="Escribe aquí">
		</div>

		<div class="flex flex-col gap-1">
			<label for="phone" class="inline-block font-montserrat font-medium">Teléfono</label>
            <input type="text" name="phone" class="w-full bg-white py-3 px-4 rounded-lg border border-primary outline-none font-montserrat placeholder:text-dark-grey transitioning focus:border-secondary" placeholder="Escribe aquí">
		</div>

		<div class="md:col-span-2 flex flex-col gap-1">
			<label for="message" class="inline-block font-montserrat font-medium">Mensaje</label>
            <textarea name="message" rows="5" class="w-full bg-white py-3 px-4 rounded-lg border border-primary outline-none font-montserrat placeholder:text-dark-grey transitioning focus:border-secondary" placeholder="Escribe aquí"></textarea>
		</div>

		<div class="md:col-span-2 text-right">
			<button type="submit" class="py-2 md:py-3 px-6 md:px-8 bg-secondary rounded-full font-semibold text-white transitioning hover:bg-primary hover:text-white hover:shadow-md">
				Enviar mensaje
			</button>
		</div>
	</form>
</template>

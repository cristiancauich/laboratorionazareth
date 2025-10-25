<script setup>
    import { ref } from 'vue'
    import Swal from 'sweetalert2'

    const referenceId = ref('')
    const referenceNumber = ref(null)
    const error = ref(null)
    const result = ref(false)

    const isLoading = ref(false)

    const handleSubmit = () => {
        isLoading.value = true

        if (!referenceId.value) {
            error.value = 'Por favor ingresa un número de referencia válido.'
            referenceNumber.value?.focus()
            isLoading.value = false
            return
        }

        error.value = null

        // Simulación de búsqueda de resultado
        setTimeout(() => {
            result.value = true 
            isLoading.value = false

            if(result.value) {
                Swal.fire({
                    title: "Tus resultados ya están disponibles",
                    text: "Para descargar los resultados de tus análisis clínicos da click en el botón descargar.",
                    icon: "success",
                    showCloseButton: true,
                    confirmButtonText: "Descargar",
                    confirmButtonColor: "#06A8BF",
                    allowOutsideClick: false,
                }).then((result) => {
                    if (result.isConfirmed) {
                        console.log('Redirigir a descarga de pdf')
                    }
                })
            } else {
                Swal.fire({
                    title: "No se encontraron resultados",
                    text: "Tus resultados aún no están disponibles. Intenta más tarde o verifica que los datos ingresados sean correctos.",
                    icon: "info",
                    showCloseButton: true,
                    confirmButtonText: "Aceptar",
                    confirmButtonColor: "#183A64",
                    allowOutsideClick: false,
                })
            }
        }, 2500)
    }
</script>

<template>
    <div class="py-12 md:py-20 xl:py-24 bg-[url(/src/assets/images/bgs/26763.jpg)] bg-cover bg-center">
        <div class="container mx-auto px-4">
            <div class="w-full md:w-8/12 xl:w-6/12 mx-auto mb-6 md:mb-8 xl:mb-10">
                <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-secondary text-center mb-6">
                    Consulta tus resultados
                </h1>

                <p class="font-montserrat text-sm lg:text-base text-center">
                    Ingresa tu número de referencia o ID de paciente para acceder de forma segura a tus resultados de análisis clínicos.
                </p>
            </div>

            <form
                @submit.prevent="handleSubmit"
                class="w-full max-w-md bg-primary shadow-lg rounded-2xl p-6 xl:p-8 flex flex-col gap-4 mx-auto"
            >
                <div class="flex flex-col gap-1">
                    <label for="referenceNumber" class="inline-block font-montserrat font-medium text-white">
                        Número de referencia
                    </label>
                    <input
                        ref="referenceNumber"
                        id="referenceNumber"
                        v-model="referenceId"
                        type="text"
                        placeholder="Ejemplo: 123456789"
                        class="w-full bg-white py-3 px-4 rounded-lg border border-primary outline-none font-montserrat placeholder:text-dark-grey transitioning focus:border-secondary"
                    />

                    <span v-if="error" class="text-xs text-red-700">
                        {{ error }}
                    </span>
                </div>

                <button type="submit" class="py-2 md:py-3 px-6 md:px-8 bg-secondary rounded-full font-semibold text-tertiary transitioning hover:bg-tertiary hover:text-secondary hover:shadow-md disabled:bg-secondary" :disabled="isLoading">
                    <span v-if="!isLoading">Consultar resultado</span>
                    <div v-else class="button-loader mx-auto"></div>
                </button>
            </form>

            <div class="mt-12 max-w-2xl mx-auto text-center text-dark-gray text-sm">
                <p>🔒 La información ingresada es confidencial y se utiliza únicamente para mostrar tus resultados. Si tienes dudas sobre tu análisis, comunícate directamente con el laboratorio.</p>
            </div>
        </div>
    </div>
</template>
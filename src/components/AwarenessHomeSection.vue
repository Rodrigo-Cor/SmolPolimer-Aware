<template>
  <div>
    <AwarenessForm :questions="startQuestions" :typeQuestion="'start'" />
  </div>
</template>

<script>
import AwarenessForm from "@/components/AwarenessForm.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AwarenessHomeSection",
  mounted() {
    if (this.id === "") {
      this.modifyData(Math.floor(Math.random() * this.startQuestions.length));
    }
  },
  components: {
    AwarenessForm,
  },
  computed: {
    ...mapGetters({
      id: "getUserId",
    }),
  },
  methods: {
    ...mapActions({
      modifyData: "modifyData",
    }),
  },
  data() {
    return {
      startQuestions: [
        {
          question:
            '¿Cuál es su nivel de familiaridad sobre el término "microplásticos?"',
          options: [
            { option: "Nada familiar", value: 0 },
            { option: "Un poco familiar", value: 1 },
            { option: "Algo familiar", value: 2 },
            { option: "Moderadamente familiar", value: 3 },
            { option: "Extremadamente familiar", value: 4 },
          ],
          help: {
            "A mediados del siglo XIX, se comenzó a crear un material, conocido como":
              { value: "", meaning: "" },
            plastico: {
              value: "plástico",
              meaning:
                "Creado a partir de polímeros sintéticos y considerado como una alternativa a los materiales de origen natural.",
            },
            ", éste actualmente se encuentra en la mayoría de los artículos de cualquier índole, utilizados en nuestra vida cotidiana. ¿Pero realmente que esta ocurriendo? Con el paso de los años, es conocido que el aumento excesivo de este material ha contribuido a una considerable contaminación, aunque ¿no te has puesto a pensar, que este material como cualquier otro objeto, comience a desgastarse, ya sea desprendiendo pequeños":
              { value: "", meaning: "" },
            fragmentos: {
              value: "fragmentos",
              meaning: "Cada una de las partes en que se rompe o divide algo.",
            },
            " o bien,": { value: "", meaning: "" },
            erosion: {
              value: "erosionándose con el ambiente",
              meaning:
                "Proceso de degaste ejercido en un objeto que producen diversos factores físicos o químicos.",
            },
            "?": { value: "", meaning: "" },
          },
        },
        {
          question:
            "¿Cuál crees que sería el nivel de prioridad adecuado para comprender el impacto de los microplásticos en los ecosistemas acuáticos?",
          options: [
            { option: "Ningun prioridad", value: 0 },
            { option: "Baja prioridad", value: 1 },
            { option: "Media prioridad", value: 2 },
            { option: "Alta prioridad ", value: 3 },
            { option: "Esencial", value: 4 },
          ],
          help: {
            "La contaminación por microplásticos en el agua surgió del uso excesivo de productos plásticos en nuestra vida cotidiana y es que, solamente hay que imaginarse el proceso con un ejemplo. Adquieres una":
              { value: "", meaning: "" },
            prenda: {
              value: "prenda sintética",
              meaning: "Vestimenta compuesta por fibras de poliéster.",
            },
            ", eso significa que, en su mayoría está compuesta por poliéster. De ahí, se necesita lavar la prenda por higiene personal y una buena presentación, entonces, en ese preciso momento, la prenda sintética comienza a desprender pequeñas":
              { value: "", meaning: "" },

            fibras: {
              value: "fibras de poliéster",
              meaning:
                "Fibras sintéticas utilizadas para simular tela en prendas de vestir.",
            },
            ", dirigiéndose al desagüe. El mejor escenario es que desemboque en una zona de agua tratada y el peor escenario es terminar en un cuerpo de agua, donde exista una flora y fauna.":
              { value: "", meaning: "" },
          },
        },
        {
          question:
            "¿Cómo evalúas los efectos graves que sufren los seres vivos acuáticos a causa de la contaminación por microplásticos?",
          options: [
            { option: "Sin efectos", value: 0 },
            { option: "Efectos menores", value: 1 },
            { option: "Neutral", value: 2 },
            { option: "Efectos moderados", value: 3 },
            { option: "Grandes efectos", value: 4 },
          ],
          help: {
            "Cuando lees la palabra “microplásticos”, lo primero que se viene a la mente es una imagen de plásticos muy pequeños, ahora bien, éstos llegan a ser desapercibidos como alimento por la":
              { value: "", meaning: "" },
            marina: {
              value: "flora y fauna marina",
              meaning:
                "Algas, mariscos, peces, plantas, aves y tortugas marinas hasta mamíferos.",
            },
            ". ¿Qué efectos tendrá? En primera, su reproducción se verá afectada, debido a que los microplásticos pueden hacerse pasar por hormonas, aunado a esto, se tiene una esperanza de vida mucho más baja, ya que, probablemente un":
              { value: "", meaning: "" },
            digestivo: {
              value: "tracto digestivo",
              meaning:
                "Conjunto de órganos cuya función es digerir y absorben los alimentos.",
            },
            " se le complique procesar es plásticos pequeños.": {
              value: "",
              meaning: "",
            },
          },
        },

        {
          question: "¿Con qué nivel de frecuencia utiliza productos plásticos?",
          options: [
            { option: "Nunca", value: 0 },
            { option: "Rara vez", value: 1 },
            { option: "Ocasionalmente", value: 2 },
            { option: "Moderadamente", value: 3 },
            { option: "Excesivamente", value: 4 },
          ],
          help: {
            "Actualmente, la industria del ": { value: "", meaning: "" },
            polimero: {
              value: "polímero",
              meaning:
                "Cadena de moléculas formada por muchas unidades conocidas como monómeros.",
            },
            " ha tomado fuerza, debido a las grandes ganancias que ha dejado la comercialización de productos compuestos por plástico. De hecho, México se encuentra en los primeros 15 lugares de los países con mayor producción de plástico y consumo de éste. De tal modo, que deja a la sociedad, la industria y el estado como los principales actores para regular, gestionar y estandarizar la venta, fabricación y tratamiento del consumo de plástico. Buscando así, prevenir y eliminar la contaminación de plásticos en el medio ambiente. ":
              { value: "", meaning: "" },
          },
        },
        {
          question:
            "Si tuvieras que decir ¿Qué tan consciente estas de la contaminación por microplásticos en México? ¿Cuál se adecuaría en este momento?",
          options: [
            { option: "No del todo consciente", value: 0 },
            { option: "Ligeramente consciente", value: 1 },
            { option: "Algo consciente", value: 2 },
            { option: "Moderadamente consciente", value: 3 },
            { option: "Extremadamente consciente", value: 4 },
          ],
          help: {
            "En el 2008, apenas se le daba una caracterización a los microplásticos. Posteriormente, en el 2016 se identificó como un alarmante problema de contaminación mundial, derivado de un aumento considerable del uso de plásticos. Sin embargo, este problema apenas comenzó a atenderse en México, hasta el 2019, en donde, solo dos instituciones que son el IMTA (Instituto Mexicano de Tecnología del Agua) e INECC (Instituto Nacional de Ecología y Cambio Climático) se encuentran investigando y tratando este problema ambiental.":
              { value: "", meaning: "" },
          },
        },
        {
          question:
            "¿Sabes qué es altamente probable que hayas ingerido microplásticos?",
          options: [
            { option: "No", value: 0 },
            { option: "Si", value: 1 },
          ],
          help: {
            "La fragmentación de los plásticos conlleva a una acumulación excesiva de pequeñas partículas en los océanos, al tener diferentes densidades, puede ser que algunas lleguen más profunda que otras. Por lo tanto, el riesgo de ingesta por los ":
              { value: "", meaning: "" },
            organismos: {
              value: "organismos acuáticos ",
              meaning:
                "Plancton, krill, larvas de peces, crustáceos, peces, mamíferos y depredadores.",
            },
            " es mayor. Esto lleva a una": { value: "", meaning: "" },
            trofica: {
              value: "cadena trófica",
              meaning:
                "Conjunto de seres vivos que se comen entre ellos para obtener los nutrientes necesarios, manteniendo al mismo tiempo un equilibrio en el ecosistema en cuestión.",
            },
            " en la cual, los microplásticos se hacen presente en el proceso.":
              {
                value: "",
                meaning: "",
              },
          },
        },
        {
          question:
            "¿Has escuchado sobre alguna técnica de limpieza de microplásticos en el agua?",
          options: [
            { option: "No", value: 0 },
            { option: "Si", value: 1 },
          ],
          help: {
            "Existen diversos procesos para la limpieza de microplásticos en el agua, pero están divididos en dos grandes grupos. Por medio de  ":
              { value: "", meaning: "" },
            separacion: {
              value: "procesos de separación ",
              meaning:
                "Se incluyen técnicas como la filtración granular rápida, filtración de disco, filtración de membrana y filtración por aire disuelto.",
            },
            " y ": { value: "", meaning: "" },
            degradacion: {
              value: "procesos de degradación",
              meaning:
                "Se presenta en géneros de bacterias como Bacillus, Enterobacter, Pseudomonas, Staphylococcus, Klebsiella, Flavobacterium, Rhodococcus y Nocardia.",
            },
            ".": {
              value: "",
              meaning: "",
            },
          },
        },
      ],
    };
  },
};
</script>

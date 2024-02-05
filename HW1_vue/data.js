// * Задачи по vue
// Задание 1.
// Задание 2.



Vue.createApp({
    data() {
        return {
            buttonText: 'Перевернуть',
            listOfElements: ['элемент 1', 'элемент 2', 'элемент 3', 'элемент 4', 'элемент 5'],
            newElement: 'Новый элемент списка'
        };
    },
    methods: {
        reverseButtonText() {
            this.buttonText = this.buttonText.split('').reverse().join('');
        },
        addNewElementToList() {
            this.listOfElements.push(this.newElement);
        },
        deleteElementFromList(event) {
            event.target.remove();
        }
    },
}).mount('#app');
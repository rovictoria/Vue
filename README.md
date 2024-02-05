## Задание 1 ##

# Часть 1. Работа с макетом #

По заданному макету создать вёрстку главной страницы (без использования vue).

Задание по работе с макетом направлено на подготовку проекта к итоговой аттестации.

# Часть 2. Задание по Vue #

1. Создать кнопку "Перевернуть". При клике на кнопку текст кнопки должен перевернуться и отобразиться в обратном порядке.
2. Есть список элементов. Пользователь может добавлять новые элементы списка с текстом “Новый элемент списка” нажав на кнопку "Добавить".
3. *Дополнительное задание: При клике на элемент списка он должен быть удален. (по желанию)

___________________________________________________________________

## Задание 2 ##

# Часть 1. Работа с макетом #

Продолжаем создание макета:

— Реализовать страницу Blog (Домашнее задание 2).

Что мы можем заметить в проекте, что часть "Articles & News" повторяется. Как итог, вам необходимо создать блок Articles & News с помощью Vue.js, где данные для вёрстки будут храниться в массиве объектов и выводить на страницу с помощью цикла v-for.

Задание по работе с макетом направлено на подготовку проекта к итоговой аттестации.

# Часть 2. Задание Vue #

Вы разрабатываете приложение для отображения и сортировки списка товаров. У вас есть массив объектов products, где каждый объект представляет товар с его названием и ценой. Вам необходимо отобразить список товаров и предоставить пользователю возможность сортировать товары по цене (по возрастанию и по убыванию).

___________________________________________________________________

## Задание 3 ##

Продолжаем работу с макетом: https://www.figma.com/file/okdYD45Tj2JpKsNASccUmf/Interior-Design-Webflow-Website-Template-(Community)-(Copy)-(Copy)?type=design&mode=design

— Реализовать страницу Blog details (Домашнее задание 3).

На странице отображается подробное описание статьи, а под ней размещаются остальные статьи. Необходимо, чтобы на выборе Tags происходила сортировка статей по выбранному тегу. Тег можно выбрать только один.

___________________________________________________________________

## Задание 4 ##

Установить и настроить Vue CLI.

Перевести свой проект на vue cli.

Все компонеты которые создали с помощью vue.components необходимо переделать на синтаксис Vue CLI.

___________________________________________________________________

## Задание 5 ##

# Часть 1 #

Продолжаем работу с макетом:
Создайте компоненты шапки и подвала, чтобы можно было подключать их к новым страницам.

Задание по работе с макетом направлено на подготовку проекта к итоговой аттестации.

# Часть 2. Задание Vue #


Вы разрабатываете приложение для интернет-магазина и у вас есть компонент Vue под названием "ProductDetails". Компонент отображает детали о конкретном продукте, включая его название, цену и статус доступности.

Внутри компонента "ProductDetails" создайте свойство "product" с объектом, представляющим информацию о продукте. Объект должен иметь свойства "name" (название продукта), "price" (цена продукта) и "available" (флаг, указывающий на доступность продукта).

Используя вычисляемое свойство, назовите его "formattedPrice", которое будет возвращать форматированную цену продукта со знаком валюты. Например, если цена равна 99.99, вычисляемое свойство должно вернуть строку "$99.99".

В компоненте "ProductDetails" отобразите название продукта, его форматированную цену и статус доступности.

Если продукт доступен, отобразите текст "Available", в противном случае - "Out of stock".

___________________________________________________________________

## Задание 6 ##

Перевести весь проект на компоненты, теперь можно работать с пропсами и выводить компоненты удобным для вас способом, чтобы их в дальнейшем можно было сортировать или менять.

Создать страницу Project (Домашнее задание 6):

В блоке categoreis необходимо сделать переключение проектов на ваше усмотрение.

Проект один в один создавать не нужно, работаем исключительно с кодом, любая стилистика уходит на второй план. Если нет времени на добавление стилей, создавайте логику сайта, а вёрстку можно будет доделать и позже.


___________________________________________________________________

## Задание 7 ##

Установите VueX и добавьте к проекту.

Приступаем к вёрстке новой страницы project details (Домашнее задание 7):

Информацию про описание проекта вынести в state.

* Слайдер можно сделать самостоятельно с помощью vue или сделать с помощью bootstrap.

___________________________________________________________________

## Задание 8 ##

Добавить переключение страниц через Vue Router.

Сделать страницу 404, которая будет появляться, если пользователь переходит по несуществующей ссылке.

Доделать проект, если остались недоделанные части.
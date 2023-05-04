# react18-typescript-p1

## setup environment

1. install node
2. intall VS Code
3. install extensions - Prettier

## create app

Via create-react-app (CRA) OR Vite (faster)

1. $> npm create vite@4.1.0 | @latest

   > > react-app
   > > React
   > > Typescript

2. $> cd react-app
3. $> npm install
4. $> npm run dev

## install Boostrap

1. npm i bootstrap@5.2.3

## 2023.05.01 ListGroup Component

// props are immutable / state is mutable

- rendering a dynamic bootstrap component
- passing data via props
- passing functions via props
- conditional rendering
- fragments
- managing state via Hook
- handling events

## 2023.05.01B Alert Component

// install ES7+ React/Redux/React-Native snippets VS Code Extension
// @.tsx file> rafce "React Arrow Function Component Export"

- passing children to a component via props

## 2023.05.02 CSS Modules

In CSS modules all class names are scoped locally; thus preventing clashes w others elsewhere in app

- import styles from "./ListGroup.module.css";
- single class <ul className='list-group'> => <ul className={styles['list-group']}> => <ul className={styles.listGroup}>
- multiple classes <ul className={[styles.listGroup, styles.container].join(" ")}>
- result: <ul class="_listGroup_9xnhk_1_container_9xnhk_6">

## 2023.05.02 React Icons

Install
$> npm i react-icons@4.7.1

- added a 'like' icon component

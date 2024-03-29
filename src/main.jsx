import ReactDOM from 'react-dom/client'
import React from 'react'
import { restaurants } from './constants/mock'
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <div>
  <div>
    <p>{restaurants[0].name}</p>
    <h3>Меню</h3>
    <ul>
      <li>{restaurants[0].menu[0].name}</li>
      <li>{restaurants[0].menu[1].name}</li>
      <li>{restaurants[0].menu[2].name}</li>
    </ul>
    <h3>Отзывы</h3>
    <ul>
      <li>{restaurants[0].reviews[0].text}</li>
      <li>{restaurants[0].reviews[1].text}</li>
    </ul>
  </div>
  <div>
    <p>{restaurants[1].name}</p>
    <h3>Меню</h3>
    <ul>
      <li>{restaurants[1].menu[0].name}</li>
      <li>{restaurants[1].menu[1].name}</li>
    </ul>
    <h3>Отзывы</h3>
    <ul>
      <li>{restaurants[1].reviews[0].text}</li>
      <li>{restaurants[1].reviews[1].text}</li>
      <li>{restaurants[1].reviews[2].text}</li>
    </ul>
  </div>
  <div>
    <p>{restaurants[2].name}</p>
    <h3>Меню</h3>
    <ul>
      <li>{restaurants[2].menu[0].name}</li>
      <li>{restaurants[2].menu[1].name}</li>
      <li>{restaurants[2].menu[2].name}</li>

    </ul>
    <h3>Отзывы</h3>
    <ul>
      <li>{restaurants[2].reviews[0].text}</li>
    </ul>
  </div>
  <div>
    <p>{restaurants[3].name}</p>
    <h3>Меню</h3>
    <ul>
      <li>{restaurants[3].menu[0].name}</li>
      <li>{restaurants[3].menu[1].name}</li>
    </ul>
    <h3>Отзывы</h3>
    <ul>
      <li>{restaurants[3].reviews[0].text}</li>
      <li>{restaurants[3].reviews[1].text}</li>

    </ul>
  </div>
</div>  
)


// root.render(
//   React.createElement('div', {
//     children: [
//       React.createElement('div', {
//         children: [
//           React.createElement('p', {
//             children: restaurants[0].name,
//           }),
//           React.createElement('h3', { children: 'Меню' }),
//           React.createElement('ul', {
//             children: [
//               React.createElement('li', {
//                 children: restaurants[0].menu[0].name,
//               }),
//               React.createElement('li', {
//                 children: restaurants[0].menu[1].name
//               }),
//               React.createElement('li', {
//                 children: restaurants[0].menu[2].name
//               })
//             ]
//           }),
//           React.createElement('h3', { children: 'Отзывы' }),
//           React.createElement('ul', {
//             children: [
//               React.createElement('li', {
//                 children: restaurants[0].reviews[0].text,
//               }),
//               React.createElement('li', {
//                 children: restaurants[0].reviews[1].text,
//               })
//             ]
//           }),
//         ]
//       }),
//       React.createElement('div', {
//         children: [
//           React.createElement('p', {
//             children: restaurants[1].name,
//           }),
//           React.createElement('h3', {
//             children: 'Меню'
//           }),
//           React.createElement('ul', {
//             children: [
//               React.createElement('li', {
//                 children: restaurants[1].menu[0].name
//               }),
//               React.createElement('li', {
//                 children: restaurants[1].menu[1].name
//               })
//             ]
//           }),
//           React.createElement('h3', {
//             children: 'Отзывы'
//           }),
//           React.createElement('ul', {
//             children: [
//               React.createElement('li', {
//                 children: restaurants[1].reviews[0].text
//               }),
//               React.createElement('li', {
//                 children: restaurants[1].reviews[1].text
//               }),
//               React.createElement('li', {
//                 children: restaurants[1].reviews[2].text
//               })
//             ]
//           })
//         ]
//       }),
//       React.createElement('div', {
//         children: [
//           React.createElement('p', {
//             children: restaurants[2].name
//           }),
//           React.createElement('h3', {
//             children: 'Меню'
//           }),
//           React.createElement('ul', {
//             children: [
//               React.createElement('li', {
//                 children: restaurants[2].menu[0].name
//               }),
//               React.createElement('li', {
//                 children: restaurants[2].menu[1].name
//               }),
//               React.createElement('li', {
//                 children: restaurants[2].menu[2].name
//               })
//             ]
//           }),
//           React.createElement('h3', {
//             children: 'Отзывы'
//           }),
//           React.createElement('ul', {
//             children: [
//               React.createElement('li', {
//                 children: restaurants[2].reviews[0].text
//               })
//             ]
//           }),
//         ]
//       }),
//       React.createElement('div', {
//         children: [
//           React.createElement('p', {
//             children: restaurants[3].name
//           }),
//           React.createElement('h3', {
//             children: 'Меню'
//           }),
//           React.createElement('ul', {
//             children: [
//               React.createElement('li', {
//                 children: restaurants[3].menu[0].name
//               }),
//               React.createElement('li', {
//                 children: restaurants[3].menu[1].name
//               })
//             ]
//           }),
//           React.createElement('h3', {
//             children: 'Отзывы'
//           }),
//           React.createElement('ul', {
//             children: [
//               React.createElement('li', {
//                 children: restaurants[3].reviews[0].text
//               }),
//               React.createElement('li', {
//                 children: restaurants[3].reviews[1].text
//               })
//             ]
//           })
//         ]
//       })
//     ]
//   }))
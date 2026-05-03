import Nav2 from './Nav2'

const Navbar = (props) => {
  return (
    <div className='nav'>
        <h1>logo</h1>
        <Nav2 theme={props.theme} />
    </div>
  )
}




// import Nav2 from './Nav2'
// const Navbar = (props) => {
// // const Navbar = ({theme, children}) => { // destructuring props -> ab directly theme and children ko access kar sakte hai without using props keyword
//   return (
//     <div className='nav'>
//         <h1>logo</h1>
//         {/* {props.children} // it will print all the children in one go */}
//         {props.children[0]}
//         {props.children[1]}
//         <Nav2 theme={props.theme} />
//     </div>
//   )
// }

export default Navbar
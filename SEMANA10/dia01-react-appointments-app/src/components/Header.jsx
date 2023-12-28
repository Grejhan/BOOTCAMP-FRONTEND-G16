//const Header = (props) => {
//console.log(props)
//return (
//<div>{props.title}</div>
// )
//}
//export default Header

const Header = ({title}) => {
    console.log(title)
  return (
    <div className="text-4xl text-center mt-4">{title}</div>
  )
}

export default Header
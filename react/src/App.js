import './App.scss'

const App = () => {
  return (
    <nav>
      <ul className='navigation'>
        <li>
          <a href='#'>About us</a>
        </li>
        <li>
          <a href='#'>Pricing</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
      </ul>
      <div class='buttons'>
        <a class='btn btn-main' href='#'>
          Sign Up
        </a>
        <a class='btn btn-hot' href='#'>
          Get a Quote
        </a>
      </div>
    </nav>
  )
}

export default App

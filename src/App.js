import {Routes , Route, Link} from 'react-router-dom';
import HomePage from './pages/Home'
import NewsPage from './pages/News'
import ContactPage from './pages/Contact'


// Tạo component App
function App() {
  return (
      <div style={{ padding: 32 }}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes >
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/news" element={<NewsPage/>}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
        </Routes>
      </div>
  );
}

export default App;

import React from "react"
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link, useLocation
} from "react-router-dom"

const Courses = (props) => {
    // location 객체를 통해서 Link의 to prop을 통해 전달한 객체 접근 가능
    const location = useLocation()
    
    return (
        <div>
            <p>{location.pathname}</p>
            <p>{location.search}</p>
            <p>{location.hash}</p>
            {/* state 객체를 통해서 추가 정보 접근 가능 */}
            <p>{location.state.fromDashboard.toString()}</p>
        </div>
    )
}

function App() {
    return (
        <Router>
            <Link to="/">Home</Link><br />
            {/*
                to 속성 : URL 주소 관련 정보
                state 속성 : 주소와 관련되지 않은 추가 정보
            */}
            <Link to={{
                    pathname: "/courses", // 주소(pathname) 전달 (원래 to에 문자열로 줘야 할 주소값)
                    search: "?sort=name", // 필요한 경우 query string 전달
                    hash: "#the-hash", // 필요한 경우 fragment 전달
                }}
                state={{ 
                    fromDashboard: true // 필요한 경우 state 속성을 통해서 추가 정보를 객체 형태로 전달 가능
                }}
            >Courses</Link><br />

            <Routes>
                <Route path="/" element={<div>Home</div>} />
                <Route path="/courses" element={<Courses />} />
            </Routes>
            
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
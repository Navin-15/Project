//without name field

// import { useNavigate, useLocation } from 'react-router-dom';
// import React from 'react';
// import { useState } from 'react';


// const Login = () => {
//     const navigate = useNavigate();
//     const location = useLocation();

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleLogin = (e) => {
//         e.preventDefault();

//         // Simple hardcoded credentials (replace with backend validation)
//         const validEmail = 'user@example.com';
//         const validPassword = 'password123';

//         if (email === validEmail && password === validPassword) {
//             // Save login status
//             localStorage.setItem('isLoggedIn', 'true');

//             // Get redirect target and booking data if available
//             const redirectTo = location.state?.redirectTo || '/';
//             const bookingData = location.state?.bookingData || null;
            
            
            
//             // Redirect after login
//             navigate(redirectTo, { state: bookingData });
//         } else {
//             setError('Invalid email or password');
//         }
//     };


//     return (
//         <div>
//             <h2>Login Page</h2>
//             {/* Your login form here */}

//             <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
//             <h2 className="mb-4">Login</h2>
//             {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
//             <form onSubmit={handleLogin}>
//                 <div className="form-group mb-3">
//                     <label>Email</label>
//                     <input 
//                         type="email" 
//                         className="form-control"
//                         value={email} 
//                         onChange={(e) => setEmail(e.target.value)} 
//                         required 
//                     />
//                 </div>
//                 <div className="form-group mb-3">
//                     <label>Password</label>
//                     <input 
//                         type="password" 
//                         className="form-control"
//                         value={password} 
//                         onChange={(e) => setPassword(e.target.value)} 
//                         required 
//                     />
//                 </div>
//                 <button type="submit" className="btn btn-primary w-100" onClick={handleLogin}>Login</button>
           
                
//             </form>
//         </div>

//             {/* <button onClick={handleLogin}>Login</button> */}
//         </div>
//     );
// };

// export default Login;
//=================================================================

//with name field

import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState } from 'react';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        // Simple hardcoded credentials (replace with backend validation)
        const validEmail = 'user@gmail.com';
        const validPassword = 'password';

        if (email === validEmail && password === validPassword) {
            // Save login status
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userName', name); // Optional: store name if needed

            // Get redirect target and booking data if available
            const redirectTo = location.state?.redirectTo || '/';
            const bookingData = location.state?.bookingData || null;

            // Redirect after login
            navigate(redirectTo, { state: bookingData });
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className='bg-secondary py-5'>
            {/* <h2>Login Page</h2> */}
            <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px',backgroundColor: ''}}>
                <h2 className="mb-4 text-center text-light fw-bold">Login</h2>
                {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
                <form onSubmit={handleLogin}>
                    <div className="form-group mb-3">
                        <label className='text-light'>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label className='text-light' >Email</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label className='text-light' >Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
//===============================================================================================================
//tried to store login details


// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// const Login = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const resp = await fetch('http://localhost:5000/api/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name, email, password }),
//       });
//       if (!resp.ok) throw new Error('Invalid credentials');
//       const user = await resp.json();
//       // store session status
//       localStorage.setItem('isLoggedIn', 'true');
//       localStorage.setItem('userName', user.name);
//       // redirect logic
//       const redirectTo = location.state?.redirectTo || '/';
//       const bookingData = location.state?.bookingData || null;
//       navigate(redirectTo, { state: bookingData });
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Login Page</h2>
//       <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
//         {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
//         <form onSubmit={handleLogin}>
//           <div className="form-group mb-3">
//             <label>Name</label>
//             <input type="text" className="form-control" value={name} onChange={e=>setName(e.target.value)} required />
//           </div>
//           <div className="form-group mb-3">
//             <label>Email</label>
//             <input type="email" className="form-control" value={email} onChange={e=>setEmail(e.target.value)} required />
//           </div>
//           <div className="form-group mb-3">
//             <label>Password</label>
//             <input type="password" className="form-control" value={password} onChange={e=>setPassword(e.target.value)} required />
//           </div>
//           <button type="submit" className="btn btn-primary w-100">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;



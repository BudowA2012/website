/* style.css */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif;
    background-color: aliceblue;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.quiz-container {
    background-color: #fff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 30px 40px;
    width: 400px;
    max-width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

h2 {
    font-size: 22px;
    margin-bottom: 20px;
    color: #333;
}

#options {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
}

button {
    padding: 12px;
    background-color: #2e59d9;
    color: #fff;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #2e59d9;
}

button:disabled {
    background-color: #ddd;
    cursor: not-allowed;
}

.hidden {
    display: none;
}

#next-button {
    margin-top: 20px;
    width: 100%;
}

#result {
    text-align: center;
}

#restart-button {
    background-color: #e74a3b;
    margin-top: 20px;
}

#restart-button:hover {
    background-color: #d35b46;
}

#score {
    font-weight: bold;
    font-size: 30px;
    color: #2c3e50;
}


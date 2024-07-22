function App() {
    return <h1>Hello</h1>;
}

fetch('./data.json').then(res => {
  const el = document.getElementById('json')
  res.json().then(data => {
    const root = createRoot(document.getElementById("root"));
    root.render(<App />);
  })
})

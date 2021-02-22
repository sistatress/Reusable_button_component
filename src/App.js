import "./styles.css";


const MyButton = ({
  className='',
  mode = 'light',
  size='medium',
  ...otherProps
}) => {
  return <button className={`${className} button--${mode} button--${size}`} {...otherProps}/>
}

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Reusable Component</p>
      </header>
      <MyButton mode='dark' size='large'>Learn React</MyButton>
      <MyButton mode='dark' size='medium'>Learn React</MyButton>
      <MyButton mode='dark' size='small'>Learn React</MyButton>
      <br/><br/><br/>
      <MyButton mode='blue' size='large'>Learn React</MyButton>
      <MyButton mode='blue' size='medium'>Learn React</MyButton>
      <MyButton mode='blue' size='small'>Learn React</MyButton>
      <br/><br/><br/>
      <MyButton mode='pink' size='large'>Learn React</MyButton>
      <MyButton mode='pink' size='medium'>Learn React</MyButton>
      <MyButton mode='pink' size='small'>Learn React</MyButton>
    </div>
  );
}

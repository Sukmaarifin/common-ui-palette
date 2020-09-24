```js
getValue = (val) => {
  console.log(page);
};

const input1 = (
  <PriusInput
    classes="input-right"
    type="text"
    value={undefined}
    placeholder="Masukkan sesuatu"
    onChange={(e) => console.log(e.target.value)}
  />
);

const input2 = <input type="text" placeholder="masukkan"></input>;

const input = (
  <>
    <select name="carlist" form="carform">
      <option value="">Choose</option>
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="opel">Opel</option>
      <option value="audi">Audi</option>
    </select>
    <input type="text" placeholder="masukkan"></input>
  </>
);

// <PriusAddColumn
// inputElement={input}
// onChangeValue={getValue}
// removeIcon={(<div>del</div>)} />
```

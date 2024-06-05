import React, { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Dropdown from './components/Dropdown/Dropdown';
import HeroImage from './components/HeroImage/HeroImage';
import Img from './components/Img/Img';
import Label from './components/Label/Label';
import RadioButton from './components/RadioButton/RadioButton';
import Table from './components/Table/Table';
import Text from './components/Text/Text';

function App() {
  // const [selectedOption, setSelectedOption] = useState<string>('');
  const [radioValue, setRadioValue] = useState<string>('option1');

  // const handleDropdownChange = (value: string) => {
  //   setSelectedOption(value);
  // };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(event.target.value);
  };

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const noOp = () => {};

  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to My Component Library</h2>

        <Button label="Click Me!" onClick={() => alert('Button clicked!')} />

        <Card>
          <h2>Card Title</h2>
          <p>This App was made with React and Storybook.</p>
        </Card>

        <Dropdown
          options={[
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3' },
          ]}
          onChange={noOp}
        />

        <HeroImage
          bgImage="https://placehold.jp/50/20451c/ffffff/500x500.png"
          text="The Hero Section"
        />

        <Label>Sample Label</Label>

        <RadioButton
          name="Example 1"
          value="option1"
          label="Option 1"
          checked={radioValue === 'option1'}
          onChange={handleRadioChange}
        />

        <Img
          src="https://placehold.jp/20/20451c/ffffff/150x150.png"
          alt="Sample"
        />

        <Table>
          <thead>
            <tr>
              <th>Header 1</th>
              <th>Header 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
            </tr>
          </tbody>
        </Table>

        <Text content="Example Text" />
      </header>
    </div>
  );
}

export default App;

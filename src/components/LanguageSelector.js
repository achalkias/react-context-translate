import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {

  return(<div>
    <br/>
      Select a language:
      <br/>
      <i className="flag us" onClick={() => this.context.onLanguageChange('english')}/>
      <i className="flag nl" onClick={() => this.context.onLanguageChange('dutch')}/>
      <br/>
    </div>
  );
  }

}

export default LanguageSelector;

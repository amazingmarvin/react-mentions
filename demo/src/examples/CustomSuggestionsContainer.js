import React, { useState } from 'react'

import { Mention, MentionsInput } from '../../../src'

import defaultStyle from './defaultStyle'
import defaultMentionStyle from './defaultMentionStyle'

export default function CustomSuggestionsContainer({ data, onAdd = () => {} }) {
  const [value, setValue] = useState('');
  const onChange = (ev, newValue) => setValue(newValue);

  return (
    <div className="custom-suggestions">
      <h3>Custom Suggestions Container</h3>

      <MentionsInput
        value={value}
        onChange={onChange}
        style={defaultStyle}
        placeholder={"Mention people using '@'"}
        a11ySuggestionsListLabel={"Suggested mentions"}
        allowSuggestionsAboveCursor={true}
        customSuggestionsContainer={(children)=><div><span style={{fontWeight: "bold"}}><h2>This container has customised suggestions</h2></span>{children}</div>}
      >
        <Mention data={data} onAdd={onAdd} style={defaultMentionStyle} />
      </MentionsInput>
    </div>
  )
}

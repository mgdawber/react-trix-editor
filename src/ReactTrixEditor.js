import React, { useEffect }  from 'react';
import 'trix';
import PropTypes from 'prop-types';

const ReactTrixEditor  = (props) => {
  const id = Math.random().toString(36);

  const onStart = () => (
    document.getElementById(id).addEventListener('trix-initialize', () => {
      const editor = document.getElementById(id).editor;
      if (props.onEditor) {
        props.onEditor(editor, document.getElementById(id));
      }
      document.getElementById(id).addEventListener('trix-change', e => update(e));
    }));
  useEffect(onStart, []);

  const update = (e) => (
    props.onChange(e.target.value)
  );

  const { input, initialValue, placeholder, autofocus } = props;

  return (
    <div>
      <input id={input} value={initialValue} type="hidden" name="content" />
      <trix-editor
        id={id}
        input={input}
        placeholder={placeholder}
        autofocus={autofocus}
      />
    </div>
  );
};

ReactTrixEditor.defaultProps = {
  autofocus: false,
  input: 'react-trix-editor',
  placeholder: 'Enter text here...'
};
ReactTrixEditor.propTypes = {
  onChange: PropTypes.func.isRequired,
  onEditor: PropTypes.func,
  autofocus: PropTypes.bool,
  input: PropTypes.string,
  placeholder: PropTypes.string,
  initialValue: PropTypes.string
};

export default ReactTrixEditor;

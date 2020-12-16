import React, { PureComponent } from "react";
//import ReactQuill from "react-quill";
import PropTypes from "prop-types";
import "react-quill/dist/quill.snow.css"

class StoryEditor extends PureComponent {
  constructor(props) {
    super(props);
    if (typeof window !== 'undefined') {
      this.ReactQuill = require('react-quill')
    }
  }

  handleDescriptionChange = description => {
    const { setUploadStoryDescription } = this.props;
    setUploadStoryDescription(description);
  };
  render() {
    const { description } = this.props;
    const ReactQuill = this.ReactQuill
    if (typeof window !== 'undefined' && ReactQuill) {
    
    return (
      <ReactQuill
        onChange={this.handleDescriptionChange}
        value={description}
        modules={StoryEditor.modules}
        formats={StoryEditor.formats}
        bounds={".app"}
        placeholder="Write or copy your Story or Images here."
      />
    );
  }
}
}

StoryEditor.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" }
    ],
    ["link", "image", "video"],
    ["clean"]
  ],
  clipboard: {
    matchVisual: false
  }
};

StoryEditor.propTypes = {
  placeholder: PropTypes.string
};

export default StoryEditor;

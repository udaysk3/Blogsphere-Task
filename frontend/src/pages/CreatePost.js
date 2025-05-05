// src/pages/CreatePost.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreatePostMutation } from '../services/blogApi';
import { useAuth } from '../hooks/useAuth';
import { handleApiError } from '../utils/handleApiError';
import PageTitle from '../components/common/PageTitle';
import Button from '../components/common/Button';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { toast } from 'react-toastify';

const CreatePost = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [createPost, { isLoading }] = useCreatePostMutation();

  const [formData, setFormData] = useState({
    title: '',
    content: EditorState.createEmpty(),
    featured_image: null,
    published: true,
  });

  const [errors, setErrors] = useState({});
  const [previewImage, setPreviewImage] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  // Handle Draft.js content change
  const handleEditorChange = (editorState) => {
    setFormData((prev) => ({
      ...prev,
      content: editorState,
    }));

    if (errors.content) {
      setErrors((prev) => ({
        ...prev,
        content: '',
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        featured_image: file,
      }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);

      if (errors.featured_image) {
        setErrors((prev) => ({
          ...prev,
          featured_image: '',
        }));
      }
    }
  };

  const handleClearImage = () => {
    setFormData((prev) => ({
      ...prev,
      featured_image: null,
    }));
    setPreviewImage(null);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }

    const plainText = formData.content.getCurrentContent().getPlainText().trim();
    if (!plainText) {
      newErrors.content = 'Content is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const htmlContent = draftToHtml(convertToRaw(formData.content.getCurrentContent()));

    const postData = new FormData();
    postData.append('title', formData.title);
    postData.append('content', htmlContent);
    postData.append('published', formData.published);
    postData.append('author_id', user.id);

    if (formData.featured_image) {
      postData.append('featured_image', formData.featured_image);
    }

    try {
      const response = await createPost(postData).unwrap();
      toast.success('Post created successfully!');
      navigate(`/post/${response.slug}`);
    } catch (error) {
      handleApiError(error);
    }
  };

  return (
    <div className="create-post-page">
      <PageTitle title="Create a New Post" />

      <div className="form-container large">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              disabled={isLoading}
              placeholder="Enter a title for your post"
            />
            {errors.title && <div className="error-message">{errors.title}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="featured_image">Featured Image</label>
            <input
              type="file"
              id="featured_image"
              name="featured_image"
              onChange={handleFileChange}
              disabled={isLoading}
              accept="image/*"
            />
            {previewImage && (
              <div className="image-preview">
                <img src={previewImage} alt="Preview" />
                <button type="button" className="remove-image" onClick={handleClearImage}>
                  Remove
                </button>
              </div>
            )}
            {errors.featured_image && <div className="error-message">{errors.featured_image}</div>}
          </div>

          <div className="form-group">
            <label>Content</label>
            <Editor
              editorState={formData.content}
              onEditorStateChange={handleEditorChange}
              wrapperClassName="editor-wrapper"
              editorClassName="editor"
              toolbarClassName="toolbar"
              readOnly={isLoading}
              placeholder="Write your post content here..."
            />
            {errors.content && <div className="error-message">{errors.content}</div>}
          </div>

          <div className="form-group checkbox">
            <label>
              <input
                type="checkbox"
                name="published"
                checked={formData.published}
                onChange={handleChange}
                disabled={isLoading}
              />
              Publish immediately
            </label>
          </div>

          <div className="form-actions">
            <Button
              type="button"
              variant="secondary"
              onClick={() => navigate('/')}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button type="submit" variant="primary" disabled={isLoading}>
              {isLoading ? 'Creating Post...' : 'Create Post'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;

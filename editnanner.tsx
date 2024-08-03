import React from 'react';
import { useState } from 'react';

interface AdBanner {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
}

const EditBannerTemplateBs = ({ adBanner }: { adBanner: AdBanner }) => {
  const [title, setTitle] = useState(adBanner.title);
  const [description, setDescription] = useState(adBanner.description);
  const [cta, setCta] = useState(adBanner.cta);
  const [image, setImage] = useState(adBanner.image);
  const [background, setBackground] = useState(adBanner.background);

  const handleSaveChanges = () => {
    // Update the ad banner with the new details
    console.log('Save changes');
  };

  return (
    <div className="edit-banner-template-bs">
      <h2>Edit Ad Banner</h2>
      <form>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <br />
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        <br />
        <label>CTA:</label>
        <input type="text" value={cta} onChange={(e) => setCta(e.target.value)} />
        <br />
        <label>Image:</label>
        <input type="file" onChange={(e) => setImage(e.target.value)} />
        <br />
        <label>Background:</label>
        <input type="file" onChange={(e) => setBackground(e.target.value)} />
        <br />
        <button onClick={handleSaveChanges}>Save Changes</button>
      </form>
    </div>
  );
};
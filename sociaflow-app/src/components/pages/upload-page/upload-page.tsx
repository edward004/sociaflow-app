import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'upload-page',
  styleUrl: 'upload-page.scss',
  shadow: true,
})
export class UploadPage {
  @State() photos: string[] = ["https://picsum.photos/400/300","https://picsum.photos/300/300","https://picsum.photos/300/260","https://picsum.photos/200/300","https://picsum.photos/190/200","https://picsum.photos/400/300","https://picsum.photos/400/400","https://picsum.photos/310/300"];

  handleFileUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.photos = [...this.photos, e.target.result as string];
      };
      reader.readAsDataURL(file);
    }
  }

  render() {
    return (
      <div class="upload-container">
        <div class="header">
          <div class="title" >Your Images</div>
          <div class="header-right" >
            <button class="filter-btn">Filter</button>
            <input type="file" id="fileInput" accept="image/*" onChange={(e) => this.handleFileUpload(e)} />
            <label htmlFor="fileInput" class="upload-btn">Upload New Photo</label>
          </div>

        </div>
        <div class="photo-grid">
          {this.photos.map(photo => <img src={photo} alt="Uploaded thumbnail" class="thumbnail" />)}
        </div>
      </div>
    );
  }
}

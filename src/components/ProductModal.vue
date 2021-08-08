<template>
  <div ref="modal" class="modal" tabindex="-1">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">產品資訊</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            data-bs-backdrop="static"
            @click="$emit('clearItem')"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="submitProductItem">
            <div @keydown.enter.stop class="row g-4">
              <div class="col-md-7">
                <div class="row">
                  <div class="col-md-12">
                    <ul class="list-unstyled d-flex mb-2">
                      <li role="uploadType" class="me-3">
                        <input
                          type="radio"
                          :value="1"
                          name="uploadType"
                          id="uploadImage"
                          class="me-1"
                          v-model="uploadType"
                          :disabled="images.length >= 6"
                        />
                        <label for="uploadImage">上傳圖片</label>
                      </li>
                      <li class="nav-item" role="uploadType">
                        <input
                          type="radio"
                          :value="2"
                          name="uploadType"
                          id="inputImage"
                          class="me-1"
                          v-model="uploadType"
                        />
                        <label for="inputImage">輸入圖片路徑</label>
                      </li>
                    </ul>
                    <div v-if="uploadType === 1">
                      <input
                        type="file"
                        id="customFile"
                        class="form-control mb-2"
                        ref="fileInput"
                        accept="image/*"
                        @change="uploadFile"
                      />
                      <div class="position-absolute bottom-0 end-0">
                        <div class="spinner-border" role="status" v-if="fileUploading">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </div>
                    <div class="input-group mb-3" v-if="uploadType === 2">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="圖片路徑"
                        aria-label="圖片路徑"
                        aria-describedby="updateTempImage"
                        @keyup.enter="updateTempImage"
                        v-model="inputImage"
                      />
                      <button
                        class="btn btn-outline-secondary"
                        type="button"
                        @click="updateTempImage"
                      >
                        新增圖片
                      </button>
                    </div>
                  </div>
                  <template v-if="images.length > 0">
                    <div class="col-md-4" v-for="(img, idx) in images" :key="`img${idx}`">
                      <div class="shadow-sm mb-3">
                        <div class="p-2">
                          <div class="productImg rounded">
                            <img class="rounded-start w-100 h-100" :src="img.url" alt="產品圖片" />
                          </div>
                          <input
                            :id="`mainImages${idx}`"
                            type="radio"
                            name="images"
                            class="me-1"
                            :value="img.id"
                            v-model="mainImgId"
                          />
                          <label :for="`mainImages${idx}`">主要圖片</label>
                          <div class="position-absolute top-0 end-0">
                            <button
                              class="btn rounded-circle shadow-sm"
                              type="button"
                              @click="deleteImg(idx)"
                            >
                              🗑
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
              <div class="col-md-5">
                <div class="row align-items-end">
                  <div class="mb-3">
                    <label for="title" class="form-label">產品名稱</label>
                    <input
                      type="text"
                      class="form-control"
                      id="title"
                      v-model="currentProductItem.title"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">狀態</label>
                    <ul class="d-flex">
                      <li class="me-3" v-for="status in statuses" :key="status.id">
                        <input
                          type="radio"
                          name="checkedStatus"
                          class="me-1 position-absolute opacity-0"
                          :value="status.id"
                          :id="`${status.type}Status`"
                          v-model="statusType"
                        />
                        <label :for="`${status.type}Status`" class="checkedStatus--checked">
                          <span
                            style="width: 10px; height: 10px"
                            class="d-inline-block rounded-circle me-1"
                            :class="`bg-${status.type}`"
                          ></span>
                          {{ status.text }}
                        </label>
                      </li>
                    </ul>
                  </div>

                  <div class="mb-3">
                    <label for="description" class="form-label">描述</label>
                    <textarea
                      class="form-control"
                      id="description"
                      placeholder="描述"
                      row="5"
                      v-model="currentProductItem.description"
                    ></textarea>
                  </div>
                  <div class="mb-3">
                    <label for="content" class="form-label">內容</label>
                    <textarea
                      class="form-control"
                      id="content"
                      placeholder="內容"
                      row="5"
                      v-model="currentProductItem.content"
                    ></textarea>
                  </div>
                  <div class="mb-3">
                    <label for="spec" class="form-label">規格</label>
                    <textarea
                      class="form-control"
                      id="spec"
                      placeholder="規格"
                      row="10"
                      v-model="currentProductItem.spec"
                    ></textarea>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="originPrice" class="form-label">原價</label>
                    <input
                      type="number"
                      min="0"
                      class="form-control"
                      id="originPrice"
                      v-model.number="currentProductItem.origin_price"
                    />
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="price" class="form-label">售價</label>
                    <input
                      type="number"
                      min="0"
                      class="form-control"
                      id="price"
                      v-model.number="currentProductItem.price"
                    />
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="category" class="form-label">類別</label>
                    <input
                      type="text"
                      class="form-control"
                      id="category"
                      v-model="currentProductItem.category"
                    />
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="unit" class="form-label">單位</label>
                    <input
                      type="text"
                      class="form-control"
                      id="unit"
                      v-model="currentProductItem.unit"
                    />
                  </div>
                  <div class="col-md-4 mb-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="isEnabled"
                        v-model="currentProductItem.is_enabled"
                      />
                      <label class="form-check-label" for="isEnabled"> 啟用 </label>
                    </div>
                  </div>
                  <div class="col-md-8 mb-3">
                    <label for="rate" class="form-label"
                      >評價 - {{ currentProductItem.rate }}</label
                    >
                    <input
                      type="range"
                      class="form-range w-100"
                      min="0"
                      max="5"
                      step="0.5"
                      id="rate"
                      v-model.number="currentProductItem.rate"
                    />
                  </div>
                  <div class="col-md-4 mb-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="isRateEnabled"
                        v-model="currentProductItem.is_rateEnabled"
                      />
                      <label class="form-check-label" for="isRateEnabled"> 顯示評價 </label>
                    </div>
                  </div>
                  <div class="col-12">
                    <button
                      type="submit"
                      class="btn btn-primary text-white w-100 rounded-pill"
                      :disabled="!isButtonValid"
                    >
                      {{ currentProductItem.id ? '編輯' : '新增' }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import modalMixin from '@/mixins/modalMixin';
import { apiUploadImg } from '@/api';

export default {
  props: {
    isCreate: {
      type: Boolean,
    },
    productItem: {
      type: Object,
    },
  },
  mixins: [modalMixin],
  inject: ['emitter'],
  emits: ['clearItem', 'submitProductItem'],
  computed: {
    isButtonValid() {
      const requireItem = ['title', 'category', 'unit', 'origin_price', 'price'];
      return requireItem.every((item) => this.currentProductItem[item]);
    },
  },
  data() {
    return {
      statuses: [
        {
          id: 1,
          type: 'danger',
          text: '熱門',
        },
        {
          id: 2,
          type: 'warning',
          text: '新上市',
        },
        {
          id: 3,
          type: 'info',
          text: '不顯示',
        },
      ],
      statusType: 3,
      fileUploading: false,
      uploadType: 1,
      currentProductItem: null,
      productModal: '',
      images: [],
      inputImage: '',
      mainImgId: '',
    };
  },
  methods: {
    submitProductItem() {
      const productId = this.currentProductItem.id;
      try {
        this.currentProductItem.imageUrl = this.images.find(
          (item) => item.id === this.mainImgId,
        ).url;
      } catch (error) {
        this.currentProductItem.imageUrl = '';
      }
      this.currentProductItem.imagesUrl = this.images
        .filter((item) => item.id !== this.mainImgId)
        .map((item) => item.url);
      this.$emit('submitProductItem', {
        isNew: !productId,
        content: this.currentProductItem,
      });
    },
    deleteImg(idx) {
      if (this.images[idx].id === this.mainImgId) {
        this.mainImgId = '';
      }
      this.images.splice(idx, 1);
    },
    async uploadFile() {
      this.fileUploading = true;
      const uploadFile = this.$refs.fileInput.files[0];
      const { size, lastModified } = uploadFile;
      const limitMaxSize = 1024 * 1024;
      if (size >= limitMaxSize) {
        this.emitter.emit('notice-message', {
          style: 'danger',
          title: '檔案大小不得超過1GB',
        });
        this.$refs.fileInput.value = '';
        this.fileUploading = false;
      } else {
        try {
          const formData = new FormData();
          formData.append('file-to-upload', uploadFile);
          const res = await apiUploadImg(formData);
          const { imageUrl, success } = res.data;
          this.images.push({ id: `new${lastModified}`, url: imageUrl });
          this.$refs.fileInput.value = '';
          this.fileUploading = false;
          if (success) {
            this.emitter.emit('notice-message', {
              style: 'success',
              title: '上傳成功',
            });
          } else {
            this.emitter.emit('notice-message', {
              style: 'danger',
              title: '上傳失敗',
            });
          }
        } catch (e) {
          this.$vErrorNotice();
        }
      }
    },
    updateTempImage() {
      if (!this.inputImage) return;
      const id = `new${new Date().getTime()}`;
      this.images.push({ id, url: this.inputImage });
      this.inputImage = '';
    },
  },
  watch: {
    productItem(val) {
      this.currentProductItem = { ...val };
      // Deal with Main Image
      const { imageUrl, imagesUrl } = this.currentProductItem;
      const mainImages = imageUrl ? [{ id: 'currentImg0', url: imageUrl }] : [];
      if (imageUrl) this.mainImgId = 'currentImg0';
      // Deal with rest Images
      const images = imagesUrl || [];
      const restImages = images
        .filter((item) => Boolean(item))
        .map((img, idx) => ({ id: `currentImg${idx + 1}`, url: img }));
      this.images = [...mainImages, ...restImages];
    },
  },
  created() {
    this.currentProductItem = { ...this.productItem };
  },
};
</script>

<style lang="scss">
.productImg {
  width: 100%;
  padding-bottom: 70%;
  img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%; /* This if for the object-fit */
    height: 100%; /* This if for the object-fit */
    object-fit: contain; /* Equivalent of the background-size: cover; of a background-image */
    object-position: center;
  }
}

input[name='checkedStatus'] {
  & ~ label {
    border-bottom: 2px solid #fff;
  }
  &:checked ~ label {
    border-bottom: 2px solid #232323;
  }
}
</style>

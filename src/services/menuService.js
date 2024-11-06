import ApiService from './apiService';

class MenuService {
  getMenuItems() {
    return ApiService.get('/menu');
  }

  addMenuItem(itemData) {
    return ApiService.post('/menu', itemData);
  }

  updateMenuItem(id, itemData) {
    return ApiService.put(`/menu/${id}`, itemData);
  }
}

export default new MenuService();

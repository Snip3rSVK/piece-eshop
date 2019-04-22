const state = {
/*   items: [], */
};

const getters = {
/*   cartProducts: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.products.all.find(product => product.id === id)
      return {
        title: product.title,
        price: product.price,
        quantity
      }
    })
  }, */
};

const actions = {
/*   addProductToCart ({ state, commit }, product) {
    commit('setCheckoutStatus', null)
    if (product.inventory > 0) {
      const cartItem = state.items.find(item => item.id === product.id)
      if (!cartItem) {
        commit('pushProductToCart', { id: product.id })
      } else {
        commit('incrementItemQuantity', cartItem)
      }
      // remove 1 item from stock
      commit('products/decrementProductInventory', { id: product.id }, { root: true })
    }
  } */
};

const mutations = {
/*   pushProductToCart (state, { id }) {
    state.items.push({
      id,
      quantity: 1
    })
  }, */
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

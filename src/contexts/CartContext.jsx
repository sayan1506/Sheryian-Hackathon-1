import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Create Cart Context
const CartContext = createContext();

// Cart Actions
const CART_ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
  LOAD_CART: 'LOAD_CART'
};

// Cart Reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM: {
      const { product } = action.payload;
      const existingItem = state.items.find(item => item.id === product.id);
      
      if (existingItem) {
        // If item exists, increase quantity
        return {
          ...state,
          items: state.items.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      } else {
        // Add new item with quantity 1
        return {
          ...state,
          items: [...state.items, { ...product, quantity: 1 }]
        };
      }
    }
    
    case CART_ACTIONS.REMOVE_ITEM: {
      const { productId } = action.payload;
      return {
        ...state,
        items: state.items.filter(item => item.id !== productId)
      };
    }
    
    case CART_ACTIONS.UPDATE_QUANTITY: {
      const { productId, quantity } = action.payload;
      
      if (quantity <= 0) {
        // Remove item if quantity is 0 or less
        return {
          ...state,
          items: state.items.filter(item => item.id !== productId)
        };
      }
      
      return {
        ...state,
        items: state.items.map(item =>
          item.id === productId
            ? { ...item, quantity }
            : item
        )
      };
    }
    
    case CART_ACTIONS.CLEAR_CART:
      return {
        ...state,
        items: []
      };
    
    case CART_ACTIONS.LOAD_CART:
      return {
        ...state,
        items: action.payload.items || []
      };
    
    default:
      return state;
  }
};

// Initial state
const initialState = {
  items: []
};

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  
  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('chaiSuttaCart');
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        dispatch({
          type: CART_ACTIONS.LOAD_CART,
          payload: { items: parsedCart.items || [] }
        });
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
    }
  }, []);
  
  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    try {
      localStorage.setItem('chaiSuttaCart', JSON.stringify(state));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [state]);
  
  // Action creators
  const addToCart = (product) => {
    dispatch({
      type: CART_ACTIONS.ADD_ITEM,
      payload: { product }
    });
  };
  
  const removeFromCart = (productId) => {
    dispatch({
      type: CART_ACTIONS.REMOVE_ITEM,
      payload: { productId }
    });
  };
  
  const updateQuantity = (productId, quantity) => {
    dispatch({
      type: CART_ACTIONS.UPDATE_QUANTITY,
      payload: { productId, quantity }
    });
  };
  
  const clearCart = () => {
    dispatch({ type: CART_ACTIONS.CLEAR_CART });
  };
  
  // Computed values
  const cartItemsCount = state.items.reduce((total, item) => total + item.quantity, 0);
  
  const cartTotal = state.items.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
  
  const getItemQuantity = (productId) => {
    const item = state.items.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };
  
  const isInCart = (productId) => {
    return state.items.some(item => item.id === productId);
  };
  
  // Context value
  const contextValue = {
    // State
    cartItems: state.items,
    cartItemsCount,
    cartTotal,
    
    // Actions
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    
    // Utilities
    getItemQuantity,
    isInCart
  };
  
  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  
  return context;
};

export default CartContext;
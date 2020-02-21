# Overall Flow of the Application

- The Car Tool Store is created, and the state is initialized (stores/carToolStore.js)

- The Redux Provider component is created and store is passed into the Provider (index.js)

- Using hooks, the store is connected to logic which configures the bound actions and data (selector) to be passed into Car Tool (containers/CarToolContainer.js). The selector will execute when the stores state changes.

- The Car Tool container receives the bound actions and data (components/CarTool.js)

- When Car Tool first loads, it needs car data as the Redux store is initialized to an empty array, to load the data, the `useEffect` hook is used. The `refreshCars` function is called which dispatches a function (actions/car-tool-actions.js)

- The Redux Thunk middleware (stores/carToolStore.js) intercepts the function object, invokes it passing in the dispatch function, the `REFRESH_CARS_REQUEST` action is dispatched (actions/car-tool-actions.js)

- The `REFRESH_CARS_REQUEST` action is ignored in our version of the application but is typically used to display some kind of UI screen with a spinner indicating to the user that the application is doing something

- Next, the AJAX call is made with the `fetch` API. This will call the REST API, fetch cars, and the callback will dispatch another action named `REFRESH_CARS_DONE`. The `REFRESH_CARS_DONE` action will include the cars data.

- The action is dispatched into the `carToolReducer` (reducers/car-tool-reducers.js) which then calls the `carsReducer`.

- The `carsReducers` handles the action by returning the cars data received from the REST API are the new cars state.

- The state selector in `CarToolContainer` (containers/CarToolContainer.js) is executed to select the new state

- This causes the new cars to be loaded, and the container is re-rendered passing the new cars data into the `CarTool` component (components/CarTool.js)

- The `CarTool` component then passes the data to the `CarTable` component where it is displayed.
// import { createSimpleAction } from '__common/redux'
// import { createActionTypes, createStateField } from 'runtime/public/redux'

// export const NavBarActionTypes = createActionTypes(
//     {
//         SetIsNewGameFormOpen: 'SetIsNewGameFormOpen',
//         SetIsSettingsDropDownOpen: 'SetIsSettingsDropDownOpen'
//     },
//     __filename
// )

// // Actions
// export const setIsMenuVisibleAction = createSimpleAction<Boolean>(NavBarActionTypes.SetIsMenuVisible)

// // Reducers
// export const isNewGameFormOpen = createStateField(false, {
//     [NavBarActionTypes.SetIsMenuVisible]: (_: boolean, action: ReturnType<typeof setIsMenuVisibleAction>) => {
//         return action.payload
//     }
// })

// export const reducer = combineStates<__NavBarProps>({
//     isMenuVisible
//   })

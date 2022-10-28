import { createSlice } from '@reduxjs/toolkit'
import { EffectNamespace } from '../../type/effect'
import { FontNamespace } from '../../type/font'
import { changeEffectAction } from './reducer/changeEffect'

const initialState: FontNamespace.FontInterface = {
  color: '#5deca6',
  content: '新增標題',
  effect: { type: EffectNamespace.EffectType.NONE }
}

export const fontSlice = createSlice({
  name: 'font',
  initialState,
  reducers: {
    changeEffect: changeEffectAction
  },
})

export const { changeEffect } = fontSlice.actions

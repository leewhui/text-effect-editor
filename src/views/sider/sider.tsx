import styles from './sider.module.less';
import { EffectNamespace } from '../../type/effect';
import { useDispatch } from 'react-redux';
import { changeEffect } from '../../store/edit/edit';
import { SiderButton } from './button';
import { SimpleGrid, Title } from '@mantine/core';
import { Inspector } from '../inspector/inspector';

export const Sider = () => {
	const dispatch = useDispatch();

	const handleSelectEffect = (effect: EffectNamespace.EffectType | null) => {
		if (effect === EffectNamespace.EffectType.NEON) createNeonEffect();
		if (effect === EffectNamespace.EffectType.EMPTY) createEmptyEffect();
		if (effect === EffectNamespace.EffectType.SPLICE) createSpliceEffect();
		if (effect === EffectNamespace.EffectType.BLUR) createBlurEffect();
		if (effect === EffectNamespace.EffectType.GLITCH) createGlitchEffect();
		if (effect === EffectNamespace.EffectType.NONE) {
			dispatch(changeEffect({ type: EffectNamespace.EffectType.NONE }));
		}
	};

	const createNeonEffect = () => {
		const effect: EffectNamespace.NeonEffectInterface = {
			strangth: 100,
			type: EffectNamespace.EffectType.NEON
		};
		dispatch(changeEffect(effect));
	};

	const createEmptyEffect = () => {
		const effect: EffectNamespace.EmptyEffectInterface = {
			type: EffectNamespace.EffectType.EMPTY,
			stroke: 50
		};
		dispatch(changeEffect(effect));
	};

	const createSpliceEffect = () => {
		const effect: EffectNamespace.SpliceEffectInterface = {
			offset: 100,
			direction: 100,
			stroke: 50,
			type: EffectNamespace.EffectType.SPLICE
		};
		dispatch(changeEffect(effect));
	};

  const createBlurEffect = () => {
		const effect: EffectNamespace.BlurEffectInterface = {
      type: EffectNamespace.EffectType.BLUR,
      strangth: 50
    };
		dispatch(changeEffect(effect));
  }

  const createGlitchEffect = () => {
    const effect: EffectNamespace.GlitchEffectInterface = {
      offset: 50,
      direction: 0,
      color1: '#00ffff',
      color2: '#ff00ff',
      type: EffectNamespace.EffectType.GLITCH
    }
		dispatch(changeEffect(effect));
  }

	return (
		<div className={styles['sider-container']}>
			<Title order={5} style={{ marginBottom: 10 }}>
				效果
			</Title>
			<SimpleGrid cols={3} spacing="sm" verticalSpacing="lg">
				<SiderButton value={EffectNamespace.EffectType.BLUR} onChange={handleSelectEffect} label="模糊">
					<img src="https://static.canva.cn/web/images/39e8991a556615f8130d7d36580f9276.jpg" alt="模糊" />
				</SiderButton>
				<SiderButton value={EffectNamespace.EffectType.EMPTY} onChange={handleSelectEffect} label="空心">
					<img src="https://static.canva.cn/web/images/014d16e44f8c5dfddf2ccdb10fb97b6b.png" alt="空心" />
				</SiderButton>
				<SiderButton value={EffectNamespace.EffectType.NEON} onChange={handleSelectEffect} label="霓虹">
					<img src="https://static.canva.cn/web/images/e4e2863c827d84431b3580f781f95177.jpg" alt="霓虹" />
				</SiderButton>
				<SiderButton value={EffectNamespace.EffectType.SPLICE} onChange={handleSelectEffect} label="出窍">
					<img src="https://static.canva.cn/web/images/6bec5afe4433f7030024ed9287752d08.png" alt="出窍" />
				</SiderButton>
				<SiderButton value={EffectNamespace.EffectType.GLITCH} onChange={handleSelectEffect} label="故障">
					<img src="https://static.canva.cn/web/images/10d3bc08aa9d6ba94ddba7a67a6ff83e.png" alt="故障" />
				</SiderButton>
				<SiderButton value={EffectNamespace.EffectType.NONE} onChange={handleSelectEffect} label="无效果">
					<img src="https://static.canva.cn/web/images/90da4f3cd9128e7939fcb61dabe0b690.png" alt="无效果" />
				</SiderButton>
			</SimpleGrid>

			<Title order={5} style={{ marginBottom: 15, marginTop: 15 }}>
				属性
			</Title>
			<Inspector />
		</div>
	);
};

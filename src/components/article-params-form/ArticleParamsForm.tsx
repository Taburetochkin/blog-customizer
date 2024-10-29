// all ui components
import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { RadioGroup } from 'src/ui/radio-group';
import { Select } from 'src/ui/select';
import { Separator } from 'src/ui/separator';
import { Text } from 'src/ui/text';

import { 
	defaultArticleState,
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr

 } from 'src/constants/articleProps';

import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';

export const ArticleParamsForm = () => {
	const [isFormOpen, setIsFormOpen] = useState(false);

	const toggleForm = () => {
		setIsFormOpen(!isFormOpen);
	}

	const [formData, setFormData] = useState({
		fontFamilyOption: defaultArticleState.fontFamilyOption,
		fontSizeOptions: defaultArticleState.fontSizeOption,
		fontColors: defaultArticleState.fontColor,
		backgroundColors: defaultArticleState.backgroundColor,
		contentWidthArr: defaultArticleState.contentWidth
	});
	return (
		<>
			<ArrowButton isOpen={isFormOpen} onClick={toggleForm} />
			<aside className={clsx(styles.container, { [styles.container_open]: isFormOpen })}>
				<form className={styles.form}>
					<Text size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Select 
					 selected={formData.fontFamilyOption}
					 options={fontFamilyOptions}
					 title='Шрифт'
					/>
					<RadioGroup 
					 selected={formData.fontSizeOptions}
					 options={fontSizeOptions}
					 name='Размер Шрифта'
					 title='Размер Шрифта' 
					/>
					<Select
					 selected={formData.fontColors}
					 options={fontColors}
					 title='Цвет Шрифта'
					/>
					<Separator />
					<Select 
					 selected={formData.backgroundColors}
					 options={backgroundColors}
					 title='Цвет Фона'
					/>
					<Select 
					 selected={formData.contentWidthArr}
					 options={contentWidthArr}
					 title='Ширина Контента'
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};

import { CSSProperties, useState } from "react";
import clsx from 'clsx';

import { Article } from "../article";
import { ArticleParamsForm } from "../article-params-form";
import { defaultArticleState } from "src/constants/articleProps";

import '../../styles/index.scss';
import styles from '../../styles/index.module.scss';

export const App = () => {
	const [articleState, setArticleState] = useState(defaultArticleState);
	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': articleState.fontFamilyOption.value,
					'--font-size': articleState.fontSizeOption.value,
					'--font-color': articleState.fontColor.value,
					'--container-width': articleState.contentWidth.value,
					'--bg-color': articleState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm setArticleFormState={setArticleState}/>
			<Article />
		</main>
	);
};
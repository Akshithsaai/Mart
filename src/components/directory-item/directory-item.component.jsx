import { useNavigate } from "react-router-dom";
import { BackGroundImage, Body, DirectoryItemConatiner } from "./directory-item.styles"

const DirectoryItem = ({ category }) => {
	const CategoryPath = "/shop/"+`${category.title.toLowerCase()}`;
	const navigate = useNavigate();

	const onNavigateHandler = () => navigate(CategoryPath);
	return (
		<DirectoryItemConatiner onClick={onNavigateHandler}>
			<BackGroundImage imageUrl={category.imageUrl} />
			<Body>
				<h2>{category.title}</h2>
				<p>Shop now</p>
			</Body>

		</DirectoryItemConatiner>

	)
}

export default DirectoryItem
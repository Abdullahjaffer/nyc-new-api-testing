const ConditionalWrapper = ({ children, condition, fallback }) =>
	condition ? children : fallback;

export default ConditionalWrapper;

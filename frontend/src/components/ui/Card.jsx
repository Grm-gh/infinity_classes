export default function Card({
  image,
  title,
  description,
  footer,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden"
    >
      {/* IMAGE */}
      {image && (
        <div className="h-44 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* CONTENT */}
      <div className="p-5 text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {title}
        </h3>

        {description && (
          <p className="text-sm text-gray-600 leading-relaxed">
            {description}
          </p>
        )}

        {footer && (
          <div className="mt-4 text-sm text-blue-700 font-medium">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

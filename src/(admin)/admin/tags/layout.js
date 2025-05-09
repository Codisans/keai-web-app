import { TagListingSideBar } from './TagListingSideBar'

const AdminTagsLayout = ({ children }) => {

    return (
        <div className="grid grid-cols-12 h-full w-full">
            <div className="row-start-1 col-start-4 col-end-13 overflow-y-auto">
                {children}
            </div>
            <TagListingSideBar />
        </div>
    )
}

export default AdminTagsLayout

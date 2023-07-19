import React, { useState } from 'react'
import "./index.css"
import BlogBaackendForm from '../blogAdminForm'
import UserEmailsAdmin from '../userEmailsAdmin'
import ResumePage from '../resumePage'

const AdminMainComp = () => {
    const [activeTab, setActiveTab] = useState("blogs")
    const activeColor = activeTab === "blogs" ? "admin-tab admin-tab-active" : "admin-tab"
    const activeColorResume = activeTab === "emails" ? "admin-tab admin-tab-active" : "admin-tab"
    const activeColoraddResume = activeTab === "addResume" ? "admin-tab admin-tab-active" : "admin-tab"
    return (
        <>
            <div>
                <div className='admin-page-main-div'>
                    <div className='admin-page-tabs-div'>
                        <p className={activeColor} onClick={() => setActiveTab("blogs")}>Blogs Page</p>
                        <p className={activeColorResume} onClick={() => setActiveTab("emails")}>Emails</p>
                        <p className={activeColoraddResume} onClick={() => setActiveTab("addResume")}>add Resume</p>
                    </div>
                </div>
                <div>
                    {activeTab === "blogs" && <BlogBaackendForm />}
                    {activeTab === "emails" && <UserEmailsAdmin />}
                    {activeTab === "addResume" && <ResumePage />}
                </div>
            </div>
        </>
    )
}

export default AdminMainComp
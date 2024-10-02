import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProjectList from './ProjectList';
import ProjectDetails from './ProjectDetails';

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <Routes>
        <Route path="/" element={<ProjectList />} />
        <Route path=":projectId" element={<ProjectDetails />} />
      </Routes>
    </div>
  );
}

export default Projects;
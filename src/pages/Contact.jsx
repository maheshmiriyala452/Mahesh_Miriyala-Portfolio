import React, { useState, useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import profileService from '../services/profileService';
import Loader from '../components/Loader';

export const Contact = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await profileService.getProfile();
        setProfile(data);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  if (loading) return <Loader message="Loading contact page..." />;

  return (
    <div className="py-4">
      <ContactForm profile={profile} />
    </div>
  );
};

export default Contact;

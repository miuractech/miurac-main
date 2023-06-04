/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { functions } from '../config/firebaseConfig';
import { httpsCallable } from 'firebase/functions';
import { Center, Loader, LoadingOverlay } from '@mantine/core';


export default function Deck() {
  const { accessId } = useParams();
  const [pdfUrl, setPdfUrl] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPDF = async () => {
      try {
        setLoading(true);
        const callableFunc = httpsCallable(functions, 'getDeck');
        const response: any = await callableFunc({ accessId });
        console.log(response);

        const pdfUrl = response.data.url as string;
        setPdfUrl(pdfUrl);
        if(pdfUrl && pdfUrl !== 'no access') window.location.href = pdfUrl
      } catch (error) {
        console.error('Error fetching PDF:', error);
        // Handle error state if necessary
      } finally {
        setLoading(false);
      }
    };

    fetchPDF();
  }, [accessId]);
  if (loading) return <LoadingOverlay visible />;
  return (
    <div className="relative h-full">
      {!loading && pdfUrl === 'no access' ? (
        <Center className="h-screen">You Don't have access.</Center>
      ) : (
        <div className="h-screen w-full">
          unable to display pdf in your device. pdf downloading....
        </div>
      )}
    </div>
  );
}

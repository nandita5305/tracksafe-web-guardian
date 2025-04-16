
import React, { useState } from 'react';
import Sidebar from "@/components/Sidebar";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Button from "@/components/Button";
import { Phone, Plus, Trash2, User } from 'lucide-react';
import { toast } from 'sonner';

interface Contact {
  id: string;
  name: string;
  phone: string;
  relation: string;
}

const EmergencyContacts: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: '1',
      name: 'John Smith',
      phone: '+91 9876543210',
      relation: 'Father'
    },
    {
      id: '2',
      name: 'Mary Johnson',
      phone: '+91 9876543211',
      relation: 'Mother'
    }
  ]);

  const [newContact, setNewContact] = useState({
    name: '',
    phone: '',
    relation: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewContact(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addContact = () => {
    if (!newContact.name || !newContact.phone) {
      toast.error('Name and phone number are required');
      return;
    }

    const contact = {
      id: Date.now().toString(),
      name: newContact.name,
      phone: newContact.phone,
      relation: newContact.relation || 'Not specified'
    };

    setContacts(prev => [...prev, contact]);
    setNewContact({ name: '', phone: '', relation: '' });
    toast.success('Contact added successfully');
  };

  const deleteContact = (id: string) => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
    toast.success('Contact removed successfully');
  };

  const handleCall = (contact: Contact) => {
    toast.info(`Calling ${contact.name} at ${contact.phone}`);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
          <div className="px-6 py-4">
            <h1 className="text-2xl font-bold">Emergency Contacts</h1>
            <p className="text-gray-500 mt-1">
              Manage your emergency contacts for instant alerts
            </p>
          </div>
        </header>

        <main className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contacts.map(contact => (
                  <Card key={contact.id} className="shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <User size={18} className="text-tracksafe-blue" />
                        {contact.name}
                      </CardTitle>
                      <span className="text-sm text-gray-500">{contact.relation}</span>
                    </CardHeader>
                    <CardContent className="pb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Phone size={16} className="text-gray-400" />
                        {contact.phone}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-0">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={() => handleCall(contact)}
                      >
                        Call Now
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="text-red-500 hover:text-red-700 border-red-200 hover:bg-red-50"
                        onClick={() => deleteContact(contact.id)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Plus size={18} className="text-tracksafe-blue" />
                    Add New Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1">
                      Name
                    </label>
                    <Input
                      name="name"
                      value={newContact.name}
                      onChange={handleInputChange}
                      placeholder="Contact Name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1">
                      Phone Number
                    </label>
                    <Input
                      name="phone"
                      value={newContact.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1">
                      Relation
                    </label>
                    <Input
                      name="relation"
                      value={newContact.relation}
                      onChange={handleInputChange}
                      placeholder="e.g., Parent, Sibling, Friend"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" onClick={addContact}>
                    Add Contact
                  </Button>
                </CardFooter>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Emergency Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">Police</p>
                      <p className="text-sm text-gray-500">Emergency: 100</p>
                    </div>
                    <Button size="sm" onClick={() => toast.info('Calling Police Emergency')}>Call</Button>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">Ambulance</p>
                      <p className="text-sm text-gray-500">Emergency: 102</p>
                    </div>
                    <Button size="sm" onClick={() => toast.info('Calling Ambulance')}>Call</Button>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">Fire Department</p>
                      <p className="text-sm text-gray-500">Emergency: 101</p>
                    </div>
                    <Button size="sm" onClick={() => toast.info('Calling Fire Department')}>Call</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EmergencyContacts;

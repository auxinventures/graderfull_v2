'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function TestPage() {
  const [users, setUsers] = useState<any[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from('test_users').select('*')
      if (error) {
        console.error('❌ Error fetching users:', error.message)
      } else {
        setUsers(data || [])
      }
    }

    fetchUsers()
  }, [])

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🔍 Supabase Test Page</h1>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  )
}
